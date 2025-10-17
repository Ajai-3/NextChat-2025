import dotenv from "dotenv";
dotenv.config();
import Redis from "ioredis";
import { Server } from "socket.io";

const REDIS_URL = process.env.REDIS_URL;
if (!REDIS_URL) {
  throw new Error("REDIS_URL is not defined in .env");
}

const pub = new Redis(REDIS_URL, {
  tls: {},
  retryStrategy: (times) => Math.min(times * 50, 2000),
});

const sub = new Redis(REDIS_URL, {
  tls: {},
  retryStrategy: (times) => Math.min(times * 50, 2000),
});

pub.on("connect", () => console.log("✅ Redis Publisher connected"));
pub.on("error", (err) => console.error("Publisher Redis error:", err));

sub.on("connect", () => console.log("✅ Redis Subscriber connected"));
sub.on("error", (err) => console.error("Subscriber Redis error:", err));

pub.ping().then(console.log).catch(console.error);

class SocketService {
  private _io: Server;
  constructor() {
    console.log("Init Socket Service 📡");
    this._io = new Server({
      cors: {
        origin: "*",
        allowedHeaders: ["*"],
      },
    });

    sub.subscribe("MESSEGES");
  }

  public initListeners() {
    const io = this.io;
    console.log("Init Socket Listners....");
    io.on("connect", (socket) => {
      console.log(`New Socket Connected ${socket.id} 🛜`);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message recived 💬", message);

        // Publish the message
        await pub.publish("MESSEGES", JSON.stringify({ message }));
      });
    });

    sub.on("message", (channel, message) => {
      if (channel === "MESSEGES") {
        console.log("Message recived from redis", message);
        io.emit("message", message);
      }
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
