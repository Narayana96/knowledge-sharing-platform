
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import MessageItem from './MessageItem';
import { Message } from './types';

interface MessagesAreaProps {
  messages: Message[];
  activeContactAvatar: string;
}

const MessagesArea = ({ messages, activeContactAvatar }: MessagesAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  return (
    <ScrollArea className="flex-1 p-4 bg-gradient-to-br from-white to-gray-50">
      <div className="space-y-4">
        <div className="flex justify-center">
          <Badge variant="outline" className="bg-gray-100/80 backdrop-blur-sm text-gray-500 rounded-full px-3 py-1">
            Today
          </Badge>
        </div>
        
        {messages.map((message) => (
          <MessageItem 
            key={message.id}
            message={message}
            isActiveUser={message.sender === 'user'}
            activeContactAvatar={activeContactAvatar}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default MessagesArea;
