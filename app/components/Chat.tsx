"use client";

import { useChat } from "ai/react";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <>
      <ul className="divide-y">
        {messages
          .filter((message) => message.role !== "system")
          .map((message, index) => (
            <li
              key={index}
              className="p-4"
            >
              {message.role === "user" ? "You:" : "Your assistant:"}
              <span>{message.content}</span>
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your prompt.."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Chat;
