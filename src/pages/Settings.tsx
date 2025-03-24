import { useState } from "react";
import { toast } from "sonner";
import SettingsTabs from "@/components/settings/SettingsTabs";

const Settings = () => {
  const [email, setEmail] = useState("alex.johnson@example.com");
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [mentorshipRequests, setMentorshipRequests] = useState(true);
  const [messageNotifications, setMessageNotifications] = useState(true);
  const [activityUpdates, setActivityUpdates] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarSrc(event.target?.result as string);
        toast.success("Profile image uploaded");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-6 sm:px-6 lg:px-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and settings.</p>
      </div>

      <SettingsTabs 
        email={email}
        profileVisibility={profileVisibility}
        mentorshipRequests={mentorshipRequests}
        messageNotifications={messageNotifications}
        activityUpdates={activityUpdates}
        avatarSrc={avatarSrc}
        onEmailChange={setEmail}
        onProfileVisibilityChange={setProfileVisibility}
        onMentorshipRequestsChange={setMentorshipRequests}
        onMessageNotificationsChange={setMessageNotifications}
        onActivityUpdatesChange={setActivityUpdates}
        onImageUpload={handleImageUpload}
      />
    </div>
  );
};

export default Settings;
