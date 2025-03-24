import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SkillTagProps {
  label: string;
  variant?: "default" | "primary" | "secondary" | "outline" | "learning" | "teaching";
  onRemove?: () => void;
  className?: string;
}

const SkillTag = ({
  label,
  variant = "default",
  onRemove,
  className,
}: SkillTagProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-primary/10 text-primary hover:bg-primary/20";
      case "secondary":
        return "bg-secondary/10 text-secondary hover:bg-secondary/20";
      case "outline":
        return "border border-border bg-transparent";
      case "learning":
        return "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20";
      case "teaching":
        return "bg-secondary/10 text-secondary hover:bg-secondary/20";
      default:
        return "";
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 animate-scale-in",
        getVariantClasses(),
        className
      )}
    >
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1.5 -mr-1 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-muted/50 transition-colors"
          aria-label={`Remove ${label} skill`}
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </Badge>
  );
};

export default SkillTag;
