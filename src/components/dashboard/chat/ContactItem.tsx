
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Contact } from './types';

interface ContactItemProps {
  contact: Contact;
  isActive: boolean;
  onClick: () => void;
}

const ContactItem = ({ contact, isActive, onClick }: ContactItemProps) => {
  return (
    <div
      className={cn(
        "p-3 cursor-pointer hover:bg-gray-50 transition-colors",
        isActive ? "bg-skillbridge-blue/5 border-l-2 border-skillbridge-blue" : ""
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-10 w-10 border border-gray-200">
            <AvatarFallback className="bg-gradient-to-br from-skillbridge-blue to-skillbridge-lightBlue text-white">
              {contact.avatar}
            </AvatarFallback>
          </Avatar>
          {contact.online && (
            <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h4 className="font-medium truncate text-sm">{contact.name}</h4>
            <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>
          </div>
          <div className="flex items-center">
            {contact.typing ? (
              <div className="flex items-center gap-1 text-skillbridge-blue text-xs">
                <span className="animate-pulse">●</span>
                <span className="animate-pulse delay-100">●</span>
                <span className="animate-pulse delay-200">●</span>
                <span className="ml-1">typing...</span>
              </div>
            ) : (
              <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
            )}
          </div>
        </div>
        {contact.unread > 0 && (
          <div className="bg-skillbridge-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {contact.unread}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
