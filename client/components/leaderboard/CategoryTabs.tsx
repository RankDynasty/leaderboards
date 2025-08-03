import { Button } from "@/components/ui/button";
import { Category } from "@shared/leaderboard";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex bg-muted/50 rounded-xl p-1.5 gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onCategoryChange("MJ")}
        className={cn(
          "flex-1 rounded-lg font-semibold transition-all duration-200",
          activeCategory === "MJ"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50",
        )}
      >
        MJ (MultiJoueur)
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onCategoryChange("BR")}
        className={cn(
          "flex-1 rounded-lg font-semibold transition-all duration-200",
          activeCategory === "BR"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50",
        )}
      >
        BR (Battle Royale)
      </Button>
    </div>
  );
}
