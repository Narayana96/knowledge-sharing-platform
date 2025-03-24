
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Star, MessageSquare } from 'lucide-react';

const mentors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    skills: ['React', 'JavaScript', 'Node.js'],
    bio: 'Full-stack developer with 7 years of experience. I love teaching React and Node.js.',
    rating: 4.9,
    reviews: 42
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'MC',
    skills: ['Python', 'Data Science', 'Machine Learning'],
    bio: 'Data scientist specialized in ML algorithms. Happy to help with Python projects and data analysis.',
    rating: 4.7,
    reviews: 28
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'ER',
    skills: ['UI/UX Design', 'Figma', 'Adobe XD'],
    bio: 'UX designer working with startups. I can help you improve your product design and user experience.',
    rating: 4.8,
    reviews: 36
  },
  {
    id: 4,
    name: 'David Kim',
    avatar: 'DK',
    skills: ['Marketing', 'SEO', 'Content Strategy'],
    bio: 'Marketing consultant with experience in growth hacking and SEO optimization.',
    rating: 4.6,
    reviews: 19
  }
];

const SearchConnect = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  
  const filteredMentors = mentors.filter(mentor => {
    // Filter by search query
    const matchesQuery = searchQuery === '' || 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter by selected skill
    const matchesSkill = !selectedSkill || 
      mentor.skills.some(skill => skill === selectedSkill);
    
    return matchesQuery && matchesSkill;
  });
  
  // Get all unique skills
  const allSkills = Array.from(new Set(mentors.flatMap(mentor => mentor.skills)));
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search by name or skill..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium flex items-center gap-1">
            <Filter size={16} />
            Filter:
          </span>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant={selectedSkill === skill ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedSkill(selectedSkill === skill ? null : skill);
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-skillbridge-blue text-white flex items-center justify-center font-medium">
                    {mentor.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{mentor.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span>{mentor.rating}</span>
                      <span className="text-gray-500">({mentor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-600 text-sm mb-3">{mentor.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 p-4 bg-gray-50">
                <Button 
                  className="w-full flex items-center justify-center gap-2 bg-skillbridge-blue hover:bg-skillbridge-darkBlue"
                >
                  <MessageSquare size={16} />
                  Chat Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredMentors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No mentors found matching your search.</p>
          <p className="text-sm mt-2">Try adjusting your filters or search for a different skill.</p>
        </div>
      )}
    </div>
  );
};

export default SearchConnect;
