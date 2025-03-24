import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, User } from "lucide-react";

interface ProfileSettingsProps {
  email: string;
  profileVisibility: boolean;
  mentorshipRequests: boolean;
  avatarSrc: string;
  onEmailChange: (value: string) => void;
  onProfileVisibilityChange: (value: boolean) => void;
  onMentorshipRequestsChange: (value: boolean) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileSettings = ({
  email,
  profileVisibility,
  mentorshipRequests,
  avatarSrc,
  onEmailChange,
  onProfileVisibilityChange,
  onMentorshipRequestsChange,
  onImageUpload
}: ProfileSettingsProps) => {
  const handleSaveProfile = () => {
    toast.success("Profile settings saved");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Profile Settings</CardTitle>
        <CardDescription>
          Manage your personal information and profile visibility
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex flex-col items-center space-y-3">
            <Avatar className="h-24 w-24">
              <AvatarImage src={avatarSrc} alt="Profile picture" />
              <AvatarFallback>
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <div className="relative">
              <Input
                type="file"
                id="avatar-upload"
                className="sr-only"
                accept="image/*"
                onChange={onImageUpload}
              />
              <Label
                htmlFor="avatar-upload"
                className="cursor-pointer inline-flex items-center gap-2 bg-muted px-3 py-2 rounded-md text-sm hover:bg-muted/80 transition-colors"
              >
                <Upload className="h-4 w-4" />
                Upload Image
              </Label>
            </div>
          </div>
          <div className="space-y-3 flex-1">
            <h3 className="text-sm font-bold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="Alex Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => onEmailChange(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                <Input id="title" defaultValue="Full Stack Developer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue="San Francisco, CA" />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Profile Visibility</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="profile-visibility">Public Profile</Label>
                <p className="text-xs text-muted-foreground">
                  Allow others to view your profile and skills
                </p>
              </div>
              <Switch 
                id="profile-visibility" 
                checked={profileVisibility}
                onCheckedChange={onProfileVisibilityChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="mentor-requests">Mentorship Requests</Label>
                <p className="text-xs text-muted-foreground">
                  Allow others to send you mentorship requests
                </p>
              </div>
              <Switch 
                id="mentor-requests" 
                checked={mentorshipRequests}
                onCheckedChange={onMentorshipRequestsChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveProfile}>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
