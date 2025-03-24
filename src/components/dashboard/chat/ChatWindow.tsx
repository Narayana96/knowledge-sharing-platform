
import React from 'react';
import ChatHeader from './ChatHeader';
import MessagesArea from './MessagesArea';
import MessageInput from './MessageInput';
import { Contact, Message } from './types';

interface ChatWindowProps {
  activeContact: Contact;
  messages: Message[];
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: () => void;
}

const ChatWindow = ({ 
  activeContact, 
  messages, 
  newMessage, 
  setNewMessage, 
  handleSendMessage 
}: ChatWindowProps) => {
  return (
    <div className="md:col-span-3 border rounded-xl flex flex-col overflow-hidden shadow-sm bg-gradient-to-br from-white to-gray-50">
      <ChatHeader activeContact={activeContact} />
      <MessagesArea 
        messages={messages} 
        activeContactAvatar={activeContact.avatar} 
      />
      <MessageInput 
        newMessage={newMessage} 
        setNewMessage={setNewMessage} 
        handleSendMessage={handleSendMessage} 
      />
    </div>
  );
};

export default ChatWindow;
