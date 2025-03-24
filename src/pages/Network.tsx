import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import MentorCard from "@/components/network/MentorCard";
import SearchBar from "@/components/network/SearchBar";
import FilterControls from "@/components/network/FilterControls";
import { mentors, getUniqueSkills, filterMentors } from "@/services/mentorServices";

const Network = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [following, setFollowing] = useState<number[]>(
    mentors.filter(mentor => mentor.isFollowing).map(mentor => mentor.id)
  );
  const [experienceFilter, setExperienceFilter] = useState<string>("all");
  const [skillFilter, setSkillFilter] = useState<string>("all");

  // Get unique skills from mentors
  const uniqueSkills = getUniqueSkills();

  // Filter mentors based on search and filters
  const filteredMentors = filterMentors(searchQuery, experienceFilter, skillFilter);

  const handleFollow = (id: number) => {
    if (following.includes(id)) {
      setFollowing(following.filter((mentorId) => mentorId !== id));
      toast.success("Unfollowed successfully");
    } else {
      setFollowing([...following, id]);
      toast.success("Following now");
    }
  };

  const handleChat = (name: string) => {
    toast.success(`Chat opened with ${name}`);
  };

  const clearFilters = () => {
    setExperienceFilter("all");
    setSkillFilter("all");
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-6 sm:px-6 lg:px-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Find Mentors</h1>
        <p className="text-muted-foreground">Connect with experts in your field of interest.</p>
      </div>

      <div className="mb-6 space-y-4">
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        <FilterControls 
          experienceFilter={experienceFilter}
          skillFilter={skillFilter}
          uniqueSkills={uniqueSkills}
          onExperienceFilterChange={setExperienceFilter}
          onSkillFilterChange={setSkillFilter}
          onClearFilters={clearFilters}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor) => (
            <MentorCard 
              key={mentor.id} 
              mentor={mentor} 
              following={following}
              onFollow={handleFollow}
              onChat={handleChat}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-muted-foreground">No mentors found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setExperienceFilter("all");
                setSkillFilter("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Network;
