
import React from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import ContactItem from './ContactItem';
import { Contact } from './types';

interface ContactListProps {
  contacts: Contact[];
  activeContact: Contact;
  setActiveContact: (contact: Contact) => void;
}

const ContactList = ({ contacts, activeContact, setActiveContact }: ContactListProps) => {
  return (
    <div className="md:col-span-1 border rounded-xl overflow-hidden shadow-sm bg-white">
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-800">Messages</h3>
          <Badge variant="outline" className="bg-skillbridge-blue/10 text-skillbridge-blue border-skillbridge-blue/30">
            {contacts.reduce((acc, contact) => acc + contact.unread, 0)}
          </Badge>
        </div>
        <div className="mt-2">
          <Input 
            placeholder="Search conversations..." 
            className="bg-gray-50 border-gray-100"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100%-92px)]">
        <div className="divide-y">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isActive={activeContact.id === contact.id}
              onClick={() => setActiveContact(contact)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContactList;
