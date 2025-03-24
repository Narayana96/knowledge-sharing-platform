
import { Home, Users, MessageSquare, Settings, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => (
  <Link
    to={to}
    className={cn(
      "sidebar-link group",
      isActive && "active"
    )}
  >
    <span className="w-5 h-5">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  const handleLogout = () => {
    // Here you would typically handle the actual logout logic
    // For now, we'll just show a toast and redirect to home
    toast.success("Successfully logged out");
    navigate("/");
    
    // Close the sidebar on mobile after logout
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navigation = [
    { to: "/dashboard", icon: <Home className="w-5 h-5" />, label: "Dashboard" },
    { to: "/network", icon: <Users className="w-5 h-5" />, label: "Network" },
    { to: "/messages", icon: <MessageSquare className="w-5 h-5" />, label: "Messages" },
    { to: "/settings", icon: <Settings className="w-5 h-5" />, label: "Settings" },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-border z-40 transition-transform duration-300 ease-in-out flex flex-col",
          !isOpen && "-translate-x-full",
          isMobile && "shadow-lg"
        )}
      >
        <div className="flex items-center justify-center px-4 h-16 border-b border-border">
          <h1 className="text-xl font-bold text-primary text-center cursor-pointer">knowledge sharing platform</h1>
        </div>

        <div className="flex flex-col p-4 border-b border-border">
          <div className="flex items-center space-x-3 mb-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Alex Johnson</p>
              <p className="text-xs text-muted-foreground truncate">Full Stack Developer</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Profile</span>
              <span>65%</span>
            </div>
            <Progress value={65} className="h-1.5" />
          </div>
        </div>

        <nav className="flex-1 py-6 px-2 overflow-y-auto">
          {navigation.map((item) => (
            <SidebarLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.to}
            />
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground group"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-2 group-hover:text-primary" />
            <span className="text-sm font-medium">Logout</span>
          </Button>
        </div>
        <div className="p-4 border-t border-border text-xs text-muted-foreground">
          <p>© 2023 SkillShare</p>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;