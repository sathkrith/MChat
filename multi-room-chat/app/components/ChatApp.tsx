// components/ChatApp.tsx
'use client'
import React, { useState } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';
import { IMessage } from './types';


const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleSendMessage = (newMessage: string) => {
    const message: IMessage = { id: nextId, text: newMessage };
    setMessages([...messages, message]);
    setNextId(nextId + 1);
  };

  return (
    <div className="chat-app">
      <MessageList messages={messages} />
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
