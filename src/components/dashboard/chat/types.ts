
export type Message = {
  id: number;
  sender: 'user' | 'mentor';
  text: string;
  time: string;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
};

export type Contact = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  online: boolean;
  typing?: boolean;
};
