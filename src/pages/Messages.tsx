import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Send, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface Conversation {
  id: number;
  name: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

interface Message {
  id: number;
  content: string;
  sent: boolean;
  time: string;
}

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Michael Chen",
    lastMessage: "Thanks for the help with Docker!",
    time: "10:32 AM",
    unread: true,
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    lastMessage: "When are you free for the next mentoring session?",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    name: "Emma Watson",
    lastMessage: "I'll review your code and get back to you.",
    time: "Oct 12",
    unread: false,
  },
  {
    id: 4,
    name: "Raj Patel",
    lastMessage: "The machine learning workshop went great!",
    time: "Oct 10",
    unread: false,
  },
];

const messagesByConversation: Record<number, Message[]> = {
  1: [
    { id: 1, content: "Hey, I need some help with Docker configurations.", sent: false, time: "10:15 AM" },
    { id: 2, content: "Sure, what's the issue you're facing?", sent: true, time: "10:17 AM" },
    { id: 3, content: "I can't get the volumes to work correctly.", sent: false, time: "10:20 AM" },
    { id: 4, content: "Could you share your docker-compose file?", sent: true, time: "10:25 AM" },
    { id: 5, content: "Will do. Let me push it to GitHub first.", sent: false, time: "10:28 AM" },
    { id: 6, content: "Thanks for the help with Docker!", sent: false, time: "10:32 AM" },
  ],
  2: [
    { id: 1, content: "I really enjoyed our mentoring session!", sent: false, time: "Yesterday" },
    { id: 2, content: "Glad to hear that! What topics would you like to cover next?", sent: true, time: "Yesterday" },
    { id: 3, content: "When are you free for the next mentoring session?", sent: false, time: "Yesterday" },
  ],
};

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const filteredConversations = conversations.filter((conversation) => {
    if (searchQuery === "") return true;
    
    const query = searchQuery.toLowerCase();
    return (
      conversation.name.toLowerCase().includes(query) ||
      conversation.lastMessage.toLowerCase().includes(query)
    );
  });

  const activeMessages = activeConversation
    ? messagesByConversation[activeConversation] || []
    : [];

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !activeConversation) return;
    
    console.log("Sending message:", newMessage);
    // In a real app, you would send this message to the server
    
    // Add the message locally for demo purposes
    const newId = activeMessages.length > 0 
      ? Math.max(...activeMessages.map(m => m.id)) + 1 
      : 1;
      
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    messagesByConversation[activeConversation] = [
      ...activeMessages,
      { id: newId, content: newMessage, sent: true, time: timeString }
    ];
    
    setNewMessage("");
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-6 sm:px-6 lg:px-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Connect with your mentors and mentees.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border overflow-hidden">
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <CardContent className="p-0 overflow-y-auto" style={{ maxHeight: "600px" }}>
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={cn(
                  "flex items-center space-x-3 p-3 hover:bg-muted/50 cursor-pointer transition-colors",
                  activeConversation === conversation.id && "bg-muted"
                )}
                onClick={() => setActiveConversation(conversation.id)}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  {conversation.unread && (
                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{conversation.name}</h3>
                    <span className="text-xs text-muted-foreground">{conversation.time}</span>
                  </div>
                  <p className={cn(
                    "text-sm truncate",
                    conversation.unread ? "text-foreground font-medium" : "text-muted-foreground"
                  )}>
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="md:col-span-2 flex flex-col" style={{ height: "650px" }}>
          {activeConversation ? (
            <>
              <div className="p-4 border-b flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage 
                    src={conversations.find(c => c.id === activeConversation)?.avatar} 
                    alt={conversations.find(c => c.id === activeConversation)?.name || ""} 
                  />
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">
                    {conversations.find(c => c.id === activeConversation)?.name}
                  </h3>
                </div>
              </div>

              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {activeMessages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex items-end space-x-2",
                      message.sent ? "justify-end" : "justify-start"
                    )}
                  >
                    {!message.sent && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage 
                          src={conversations.find(c => c.id === activeConversation)?.avatar} 
                          alt={conversations.find(c => c.id === activeConversation)?.name || ""} 
                        />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "px-4 py-2 rounded-lg max-w-[80%]",
                        message.sent 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className={cn(
                        "text-xs mt-1 block",
                        message.sent ? "text-primary-foreground/80" : "text-muted-foreground"
                      )}>
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>

              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-muted-foreground">Select a conversation to start chatting</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Messages;