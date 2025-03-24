
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Paperclip, Code, Image, Smile, Mic } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface MessageInputProps {
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: () => void;
}

const MessageInput = ({ newMessage, setNewMessage, handleSendMessage }: MessageInputProps) => {
  return (
    <div className="p-3 border-t bg-white">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Paperclip size={16} className="text-gray-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Attach file</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Code size={16} className="text-gray-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Insert code</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                <Image size={16} className="text-gray-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Insert image</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9 md:flex hidden">
                <Smile size={16} className="text-gray-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add emoji</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9 md:flex hidden">
                <Mic size={16} className="text-gray-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Voice message</TooltipContent>
          </Tooltip>
        </div>
        
        <Input
          placeholder="Type your message..."
          className="flex-1 bg-gray-50 border-gray-100"
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
          className="bg-gradient-to-r from-skillbridge-blue to-skillbridge-lightBlue hover:opacity-90 transition-opacity rounded-full"
          size="icon"
          onClick={handleSendMessage}
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
