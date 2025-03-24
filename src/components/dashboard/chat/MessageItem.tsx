
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Message } from './types';

interface MessageItemProps {
  message: Message;
  isActiveUser: boolean;
  activeContactAvatar: string;
}

const MessageItem = ({ message, isActiveUser, activeContactAvatar }: MessageItemProps) => {
  return (
    <div
      key={message.id}
      className={cn(
        "flex",
        message.sender === 'user' ? "justify-end" : "justify-start"
      )}
    >
      {message.sender === 'mentor' && (
        <Avatar className="h-8 w-8 mr-2 mt-1">
          <AvatarFallback className="bg-gradient-to-br from-skillbridge-blue to-skillbridge-lightBlue text-white text-xs">
            {activeContactAvatar}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "max-w-[80%] rounded-2xl p-3 shadow-sm",
          message.sender === 'user'
            ? "bg-gradient-to-r from-skillbridge-blue to-skillbridge-lightBlue text-white rounded-br-none"
            : "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
        )}
      >
        <pre className={cn(
          "text-sm whitespace-pre-wrap font-sans",
          message.text.includes('function') && "bg-gray-800 text-gray-100 p-2 rounded-lg my-1 font-mono text-xs"
        )}>
          {message.text}
        </pre>
        
        <div className="flex items-center justify-end gap-1 mt-1">
          <span
            className={cn(
              "text-xs",
              message.sender === 'user' ? "text-blue-100" : "text-gray-500"
            )}
          >
            {message.time}
          </span>
          
          {message.sender === 'user' && message.status && (
            <span className="text-xs text-blue-100">
              {message.status === 'sending' && '⌛'}
              {message.status === 'sent' && '✓'}
              {message.status === 'delivered' && '✓✓'}
              {message.status === 'read' && '✓✓'}
            </span>
          )}
        </div>
      </div>
      
      {message.sender === 'user' && (
        <Avatar className="h-8 w-8 ml-2 mt-1">
          <AvatarFallback className="bg-gradient-to-r from-skillbridge-blue to-skillbridge-lightBlue text-white text-xs">
            JD
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default MessageItem;
