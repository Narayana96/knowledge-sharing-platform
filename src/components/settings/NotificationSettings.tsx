import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface NotificationSettingsProps {
  email: string;
  messageNotifications: boolean;
  activityUpdates: boolean;
  onEmailChange: (value: string) => void;
  onMessageNotificationsChange: (value: boolean) => void;
  onActivityUpdatesChange: (value: boolean) => void;
}

const NotificationSettings = ({
  email,
  messageNotifications,
  activityUpdates,
  onEmailChange,
  onMessageNotificationsChange,
  onActivityUpdatesChange
}: NotificationSettingsProps) => {
  const handleSaveNotifications = () => {
    toast.success("Notification preferences saved");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Notification Preferences</CardTitle>
        <CardDescription>
          Manage how and when you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="message-notifications">Messages</Label>
              <p className="text-xs text-muted-foreground">
                Receive notifications for new messages
              </p>
            </div>
            <Switch 
              id="message-notifications" 
              checked={messageNotifications}
              onCheckedChange={onMessageNotificationsChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="activity-updates">Activity Updates</Label>
              <p className="text-xs text-muted-foreground">
                Receive weekly summaries of your mentor/mentee activities
              </p>
            </div>
            <Switch 
              id="activity-updates" 
              checked={activityUpdates}
              onCheckedChange={onActivityUpdatesChange}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Email Notifications</h3>
          <div className="space-y-2">
            <Label htmlFor="notification-email">Notification Email</Label>
            <Input 
              id="notification-email" 
              type="email" 
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveNotifications}>Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
