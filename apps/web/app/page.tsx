"use client";
import React, { useState, useEffect } from "react";
import { useSocket } from "../context/SocketProvider";

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
      <h1>Home Page</h1>

      <div>
        {" "}
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          placeholder="Type anything...."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

      <div>
        {messages.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
    </div>
  );
}
