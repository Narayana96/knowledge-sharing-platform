
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MoreVertical } from 'lucide-react';
import { Contact } from './types';

interface ChatHeaderProps {
  activeContact: Contact;
}

const ChatHeader = ({ activeContact }: ChatHeaderProps) => {
  return (
    <div className="p-4 border-b bg-white sticky top-0 z-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-10 w-10 border border-gray-200">
            <AvatarFallback className="bg-gradient-to-br from-skillbridge-blue to-skillbridge-lightBlue text-white">
              {activeContact.avatar}
            </AvatarFallback>
          </Avatar>
          {activeContact.online && (
            <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div>
          <h3 className="font-medium">{activeContact.name}</h3>
          <p className="text-xs text-gray-500">
            {activeContact.online ? (
              activeContact.typing ? 'Typing...' : 'Online'
            ) : 'Last seen recently'}
          </p>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="rounded-full">
        <MoreVertical size={18} />
      </Button>
    </div>
  );
};

export default ChatHeader;
