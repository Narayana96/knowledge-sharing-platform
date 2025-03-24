export interface Mentor {
    id: number;
    name: string;
    avatar?: string;
    bio: string;
    skills: string[];
    isFollowing: boolean;
    experience?: string;
  }
  
  export const mentors: Mentor[] = [
    {
      id: 1,
      name: "Emma Watson",
      bio: "Senior Frontend Developer with expertise in React and modern JavaScript frameworks.",
      skills: ["React", "JavaScript", "CSS", "UI/UX"],
      isFollowing: false,
      experience: "Senior",
    },
    {
      id: 2,
      name: "Michael Chen",
      bio: "Backend engineer specializing in scalable systems and cloud architecture.",
      skills: ["Node.js", "AWS", "Microservices", "Python"],
      isFollowing: true,
      experience: "Senior",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      bio: "Full stack developer with a passion for teaching and mentoring junior developers.",
      skills: ["MongoDB", "Express", "React", "Node.js"],
      isFollowing: false,
      experience: "Mid-level",
    },
    {
      id: 4,
      name: "David Kim",
      bio: "Mobile application developer with extensive knowledge in cross-platform technologies.",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      isFollowing: false,
      experience: "Mid-level",
    },
    {
      id: 5,
      name: "Olivia Johnson",
      bio: "DevOps specialist focusing on CI/CD pipelines and infrastructure as code.",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
      isFollowing: false,
      experience: "Junior",
    },
    {
      id: 6,
      name: "Raj Patel",
      bio: "Data scientist with expertise in machine learning and artificial intelligence.",
      skills: ["Python", "TensorFlow", "Data Analysis", "SQL"],
      isFollowing: true,
      experience: "Senior",
    },
  ];
  
  export const getUniqueSkills = () => {
    return Array.from(new Set(mentors.flatMap(mentor => mentor.skills)));
  };
  
  export const filterMentors = (
    searchQuery: string,
    experienceFilter: string,
    skillFilter: string
  ) => {
    return mentors.filter((mentor) => {
      // Search filter
      const matchesSearch = searchQuery === "" || 
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Experience filter
      const matchesExperience = experienceFilter === "all" || 
        mentor.experience === experienceFilter;
      
      // Skill filter
      const matchesSkill = skillFilter === "all" || 
        mentor.skills.includes(skillFilter);
      
      return matchesSearch && matchesExperience && matchesSkill;
    });
  };
  