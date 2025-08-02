import { useState } from "react";
import { Category, getLeaderboard } from "@shared/leaderboard";
import { CategoryTabs } from "./CategoryTabs";
import { MemberCard } from "./MemberCard";
import { StatsOverview } from "./StatsOverview";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Leaderboard() {
  const [activeCategory, setActiveCategory] = useState<Category>('MJ');
  const [showAnimation, setShowAnimation] = useState(false);

  const leaderboardData = getLeaderboard(activeCategory);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Live Rankings
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Competition Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track member performance across MJ and BR categories with real-time rankings and monthly progress.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <StatsOverview category={activeCategory} />
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <CategoryTabs 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange} 
              />
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <Card className="border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">
                {activeCategory} Category Rankings
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                {leaderboardData.length} members
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {leaderboardData.map((entry) => (
              <MemberCard 
                key={entry.member.id} 
                entry={entry} 
                showAnimation={showAnimation}
              />
            ))}
          </CardContent>
        </Card>

        {/* Footer note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Rankings update in real-time • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}
