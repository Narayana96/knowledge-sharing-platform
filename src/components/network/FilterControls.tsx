import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

interface FilterControlsProps {
  experienceFilter: string;
  skillFilter: string;
  uniqueSkills: string[];
  onExperienceFilterChange: (value: string) => void;
  onSkillFilterChange: (value: string) => void;
  onClearFilters: () => void;
}

const FilterControls = ({
  experienceFilter,
  skillFilter,
  uniqueSkills,
  onExperienceFilterChange,
  onSkillFilterChange,
  onClearFilters,
}: FilterControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="experience-filter">Experience Level</Label>
              <Select
                value={experienceFilter}
                onValueChange={onExperienceFilterChange}
              >
                <SelectTrigger id="experience-filter">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Junior">Junior</SelectItem>
                  <SelectItem value="Mid-level">Mid-level</SelectItem>
                  <SelectItem value="Senior">Senior</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="skill-filter">Skill</Label>
              <Select
                value={skillFilter}
                onValueChange={onSkillFilterChange}
              >
                <SelectTrigger id="skill-filter">
                  <SelectValue placeholder="Select skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  {uniqueSkills.map(skill => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      
      {(experienceFilter !== "all" || skillFilter !== "all") && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Active filters:</span>
          {experienceFilter !== "all" && (
            <span className="bg-muted px-2 py-1 rounded-md">
              {experienceFilter} Level
            </span>
          )}
          {skillFilter !== "all" && (
            <span className="bg-muted px-2 py-1 rounded-md">
              {skillFilter}
            </span>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            className="h-auto px-2 py-1"
          >
            Clear
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterControls;
