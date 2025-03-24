import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SkillTag from "@/components/SkillTag";
import { MessageSquare, User } from "lucide-react";

interface MentorCardProps {
  mentor: {
    id: number;
    name: string;
    avatar?: string;
    bio: string;
    skills: string[];
    isFollowing: boolean;
    experience?: string;
  };
  following: number[];
  onFollow: (id: number) => void;
  onChat: (name: string) => void;
}

const MentorCard = ({ mentor, following, onFollow, onChat }: MentorCardProps) => {
  return (
    <Card className="overflow-hidden card-hover animate-scale-in">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{mentor.name}</h3>
                {mentor.experience && (
                  <p className="text-xs text-muted-foreground">{mentor.experience} Level</p>
                )}
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {mentor.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {mentor.skills.map((skill) => (
              <SkillTag key={skill} label={skill} variant="primary" />
            ))}
          </div>
        </div>

        <div className="flex border-t border-border">
          <Button
            variant={following.includes(mentor.id) ? "default" : "outline"}
            className="flex-1 rounded-none border-r border-border"
            onClick={() => onFollow(mentor.id)}
          >
            {following.includes(mentor.id) ? "Following" : "Follow"}
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-none"
            onClick={() => onChat(mentor.name)}
          >
            <MessageSquare className="h-4 w-4 mr-2" /> Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
