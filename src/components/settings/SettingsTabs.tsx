import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSettings from "./ProfileSettings";
import NotificationSettings from "./NotificationSettings";

interface SettingsTabsProps {
  email: string;
  profileVisibility: boolean;
  mentorshipRequests: boolean;
  messageNotifications: boolean;
  activityUpdates: boolean;
  avatarSrc: string;
  onEmailChange: (value: string) => void;
  onProfileVisibilityChange: (value: boolean) => void;
  onMentorshipRequestsChange: (value: boolean) => void;
  onMessageNotificationsChange: (value: boolean) => void;
  onActivityUpdatesChange: (value: boolean) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SettingsTabs = ({
  email,
  profileVisibility,
  mentorshipRequests,
  messageNotifications,
  activityUpdates,
  avatarSrc,
  onEmailChange,
  onProfileVisibilityChange,
  onMentorshipRequestsChange,
  onMessageNotificationsChange,
  onActivityUpdatesChange,
  onImageUpload
}: SettingsTabsProps) => {
  return (
    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="grid w-full md:w-auto grid-cols-2 md:inline-flex">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="space-y-6">
        <ProfileSettings 
          email={email}
          profileVisibility={profileVisibility}
          mentorshipRequests={mentorshipRequests}
          avatarSrc={avatarSrc}
          onEmailChange={onEmailChange}
          onProfileVisibilityChange={onProfileVisibilityChange}
          onMentorshipRequestsChange={onMentorshipRequestsChange}
          onImageUpload={onImageUpload}
        />
      </TabsContent>

      <TabsContent value="notifications" className="space-y-6">
        <NotificationSettings 
          email={email}
          messageNotifications={messageNotifications}
          activityUpdates={activityUpdates}
          onEmailChange={onEmailChange}
          onMessageNotificationsChange={onMessageNotificationsChange}
          onActivityUpdatesChange={onActivityUpdatesChange}
        />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTabs;