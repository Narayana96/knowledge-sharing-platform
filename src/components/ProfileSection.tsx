import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import SkillTag from "./SkillTag";
import { toast } from "sonner";

const ProfileSection = () => {
  const [bio, setBio] = useState<string>("Full-stack developer with 5+ years of experience in React, Node.js, and TypeScript. Passionate about mentoring and learning new technologies.");
  const [isEditingBio, setIsEditingBio] = useState<boolean>(false);
  const [newTeachingSkill, setNewTeachingSkill] = useState<string>("");
  const [newLearningSkill, setNewLearningSkill] = useState<string>("");
  const [teachingSkills, setTeachingSkills] = useState<string[]>(["React", "TypeScript", "Node.js"]);
  const [learningSkills, setLearningSkills] = useState<string[]>(["Rust", "WebAssembly"]);

  const handleSaveBio = () => {
    setIsEditingBio(false);
    toast.success("Bio updated successfully");
  };

  const handleAddTeachingSkill = () => {
    if (newTeachingSkill.trim() === "") return;
    if (teachingSkills.includes(newTeachingSkill.trim())) {
      toast.error("Skill already exists");
      return;
    }
    setTeachingSkills([...teachingSkills, newTeachingSkill.trim()]);
    setNewTeachingSkill("");
    toast.success("Skill added successfully");
  };

  const handleAddLearningSkill = () => {
    if (newLearningSkill.trim() === "") return;
    if (learningSkills.includes(newLearningSkill.trim())) {
      toast.error("Skill already exists");
      return;
    }
    setLearningSkills([...learningSkills, newLearningSkill.trim()]);
    setNewLearningSkill("");
    toast.success("Skill added successfully");
  };

  const handleRemoveTeachingSkill = (skill: string) => {
    setTeachingSkills(teachingSkills.filter((s) => s !== skill));
    toast.success("Skill removed successfully");
  };

  const handleRemoveLearningSkill = (skill: string) => {
    setLearningSkills(learningSkills.filter((s) => s !== skill));
    toast.success("Skill removed successfully");
  };

  return (
    <Card className="shadow-sm animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Profile</CardTitle>
        <CardDescription>
          Update your profile information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Bio</h3>
            {!isEditingBio && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsEditingBio(true)}
              >
                Edit
              </Button>
            )}
          </div>
          
          {isEditingBio ? (
            <div className="space-y-2">
              <Textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write a short bio about yourself..."
                className="min-h-[100px]"
              />
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsEditingBio(false)}
                >
                  Cancel
                </Button>
                <Button 
                  size="sm" 
                  onClick={handleSaveBio}
                >
                  Save
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {bio}
            </p>
          )}
        </div>

        <Separator />

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Skills I Teach</h3>
          <div className="flex flex-wrap gap-2">
            {teachingSkills.map((skill) => (
              <SkillTag
                key={skill}
                label={skill}
                variant="teaching"
                onRemove={() => handleRemoveTeachingSkill(skill)}
              />
            ))}
          </div>
          <div className="flex">
            <Input
              value={newTeachingSkill}
              onChange={(e) => setNewTeachingSkill(e.target.value)}
              placeholder="Add a skill..."
              className="rounded-r-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddTeachingSkill();
                }
              }}
            />
            <Button 
              onClick={handleAddTeachingSkill}
              className="rounded-l-none"
            >
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Skills I'm Learning</h3>
          <div className="flex flex-wrap gap-2">
            {learningSkills.map((skill) => (
              <SkillTag
                key={skill}
                label={skill}
                variant="learning"
                onRemove={() => handleRemoveLearningSkill(skill)}
              />
            ))}
          </div>
          <div className="flex">
            <Input
              value={newLearningSkill}
              onChange={(e) => setNewLearningSkill(e.target.value)}
              placeholder="Add a skill..."
              className="rounded-r-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddLearningSkill();
                }
              }}
            />
            <Button 
              onClick={handleAddLearningSkill}
              className="rounded-l-none"
            >
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;