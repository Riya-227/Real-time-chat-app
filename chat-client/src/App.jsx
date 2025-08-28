import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const ws = useRef(null);

  // Generate a random user ID
  const [userId] = useState(() => Math.floor(Math.random() * 10000));

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      console.log("✅ Connected to server");
    };

    ws.current.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "chat") {
        setMessages((prev) => [
          ...prev,
          {
            text: msg.text,
            sender: msg.userId === userId ? "me" : "other",
          },
        ]);
      } else if (msg.type === "typing" && msg.userId !== userId) {
        setTyping(true);
        setTimeout(() => setTyping(false), 2000); // auto-hide after 2s
      }
    };

    ws.current.onclose = () => {
      console.log("❌ Disconnected from server");
    };

    return () => {
      ws.current.close();
    };
  }, [userId]);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const messageData = { type: "chat", text: input, userId };
      ws.current.send(JSON.stringify(messageData));
      setInput("");
    }
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    ws.current.send(JSON.stringify({ type: "typing", userId }));
  };

  return (
    <div className="chat-container">
      <div className="chat-header">💬 Real-Time Chat</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "me" ? "my-message" : "other-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {typing && <div className="typing">✍️ Someone is typing...</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={handleTyping}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}

export default App;