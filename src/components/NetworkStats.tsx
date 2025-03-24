import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface TimelineItem {
  id: number;
  type: "mentoring" | "learning";
  username: string;
  avatar?: string;
  time: string;
  skill: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "mentoring",
    username: "Sarah Chen",
    time: "2 hours ago",
    skill: "React Hooks",
  },
  {
    id: 2,
    type: "learning",
    username: "Miguel Rodriguez",
    time: "Yesterday",
    skill: "GraphQL",
  },
  {
    id: 3,
    type: "mentoring",
    username: "Priya Sharma",
    time: "3 days ago",
    skill: "TypeScript",
  }
];

const NetworkStats = () => {
  return (
    <Card className="shadow-sm animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Network</CardTitle>
        <CardDescription>
          Your connection statistics
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center bg-muted/50 rounded-lg p-4">
            <span className="text-3xl font-semibold">87</span>
            <span className="text-sm text-muted-foreground">Followers</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-muted/50 rounded-lg p-4">
            <span className="text-3xl font-semibold">42</span>
            <span className="text-sm text-muted-foreground">Following</span>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
          <div className="space-y-4">
            {timelineData.map((item) => (
              <div key={item.id} className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={item.avatar} alt={item.username} />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{item.username}</span>
                    {item.type === "mentoring" 
                      ? " received mentoring on " 
                      : " mentored you on "}
                    <span className="font-medium">{item.skill}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkStats;