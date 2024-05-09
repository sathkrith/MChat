// components/MessageList.tsx
import React from 'react';
import { IMessageListProps } from './types';

const MessageList: React.FC<IMessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className="message">
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
