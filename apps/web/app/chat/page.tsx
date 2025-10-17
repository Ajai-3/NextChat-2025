
"use client";
import React, { useState, useEffect } from "react";
import { useSocket } from "@/context/SocketProvider";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div>
      <h1 className="bg-green-600">Home Page</h1>

      <div>
        {" "}
        <input
        className="bg-transparent p-2 rounded-md"
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          placeholder="Type anything...."
        />
        <button onClick={handleSendMessage} className="p-1 bg-emerald-700">Send</button>
      </div>

      <div className="flex flex-col gap-2">
        {messages.map((e, i) => (
          <li className="self-start bg-teal-600 rounded-lg inline-block max-w-xs p-1 break-words" key={i}>{e}</li>
        ))}
      </div>
    </div>
  );
}
