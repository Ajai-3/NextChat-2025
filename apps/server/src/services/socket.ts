import dotenv from "dotenv";
dotenv.config()
import Redis from "ioredis";
import { Server } from "socket.io";

const pub = new Redis(process.env.REDIS_URL || "");
const sub = new Redis(process.env.REDIS_URL || "");

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

    sub.subscribe("MESSEGES")
  }

  public initListners() {
    const io = this.io;
    console.log("Init Socket Listners....");
    io.on("connect", (socket) => {
      console.log(`New Socket Connected ${socket.id} 🛜`);

      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message recived 💬", message);

        // Publish the message
        await pub.publish('MESSEGES', JSON.stringify({ message }))
      });
    });

    sub.on('message', (channel, message) => {
      if (channel === 'MESSEGES') {
        io.emit("message", message)
      }
    })

  }

  get io() {
    return this._io;
  }
}

export default SocketService;
