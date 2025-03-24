
import React, { useState } from 'react';
import ContactList from './chat/ContactList';
import ChatWindow from './chat/ChatWindow';
import { Message } from './chat/types';
import { initialMessages, contacts } from './chat/chatData';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [activeContact, setActiveContact] = useState(contacts[0]);
  
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sending'
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Simulate message delivery
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg
        )
      );
    }, 1000);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[calc(100vh-280px)] min-h-[500px]">
      <ContactList 
        contacts={contacts}
        activeContact={activeContact}
        setActiveContact={setActiveContact}
      />
      
      <ChatWindow 
        activeContact={activeContact}
        messages={messages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatInterface;
