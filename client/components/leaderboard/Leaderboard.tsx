import { useState } from "react";
import { Category, getLeaderboard } from "@shared/leaderboard";
import { CategoryTabs } from "./CategoryTabs";
import { MemberCard } from "./MemberCard";
import { StatsOverview } from "./StatsOverview";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { fetchLeaderboardEntry } from "@/services/api";

export function Leaderboard() {
  const [activeCategory, setActiveCategory] = useState<Category>("MJ");
  const [showAnimation, setShowAnimation] = useState(false);

  // const leaderboardData = getLeaderboard(activeCategory);

  const { data, isLoading, error } = useQuery({
    queryKey: ["leaderboardEntry", activeCategory], // Clé unique pour cette requête
    queryFn: () => fetchLeaderboardEntry(activeCategory), // Fonction pour récupérer les données
  });

  const leaderboardData = data || [];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Rank Dynasty Live
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 sm:mb-3">
            Classement interne du CLAN
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Visualiser ici les performances en internes du clan BR et MJ avec les progressions mensuels.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-6 sm:mb-8">
          <StatsOverview category={activeCategory} entry={leaderboardData.map(
            (entry) => (entry.member))
          } />
        </div>

        {/* Category Tabs */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center">
            <div className="w-full max-w-md px-4 sm:px-0">
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
                Classement {activeCategory}
              </CardTitle>
              <Badge variant="outline" className="text-xs">
                {leaderboardData.length} membres
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
            Classement mise à jour en temps réels • {" "}
            {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}
