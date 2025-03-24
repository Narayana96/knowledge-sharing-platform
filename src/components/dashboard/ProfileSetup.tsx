
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { User, Plus, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const ProfileSetup = () => {
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>(['React', 'JavaScript', 'TypeScript']);
  const [learningInput, setLearningInput] = useState('');
  const [learning, setLearning] = useState<string[]>(['Python', 'Machine Learning']);

  const handleAddSkill = () => {
    if (skillInput.trim() !== '' && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleAddLearning = () => {
    if (learningInput.trim() !== '' && !learning.includes(learningInput.trim())) {
      setLearning([...learning, learningInput.trim()]);
      setLearningInput('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleRemoveLearning = (item: string) => {
    setLearning(learning.filter(l => l !== item));
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Profile Section */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Manage your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={40} className="text-gray-500" />
            </div>
            <h3 className="font-medium text-lg">{name}</h3>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <Textarea 
              placeholder="Tell others about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="resize-none h-24"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveProfile} className="w-full">Save Profile</Button>
        </CardFooter>
      </Card>

      {/* Skills I Can Teach */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Skills I Can Teach</CardTitle>
          <CardDescription>What are you skilled at?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input 
              placeholder="Add a skill..."
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddSkill();
                }
              }}
            />
            <Button size="icon" onClick={handleAddSkill}>
              <Plus size={16} />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1 px-3 py-1.5">
                {skill}
                <X size={14} className="cursor-pointer" onClick={() => handleRemoveSkill(skill)} />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills I Want to Learn */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Skills I Want to Learn</CardTitle>
          <CardDescription>What do you want to learn?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input 
              placeholder="Add a skill to learn..."
              value={learningInput}
              onChange={(e) => setLearningInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddLearning();
                }
              }}
            />
            <Button size="icon" onClick={handleAddLearning}>
              <Plus size={16} />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {learning.map((item, index) => (
              <Badge key={index} variant="outline" className="flex items-center gap-1 px-3 py-1.5">
                {item}
                <X size={14} className="cursor-pointer" onClick={() => handleRemoveLearning(item)} />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSetup;
