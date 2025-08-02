import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Medal, Award } from "lucide-react";

interface AchievementsSectionProps {
  achievements: string[];
}

export function AchievementsSection({
  achievements,
}: AchievementsSectionProps) {
  const getAchievementIcon = (achievement: string) => {
    if (achievement.includes("Legendary") || achievement.includes("Nuclear")) {
      return <Trophy className="w-4 h-4 text-yellow-500" />;
    }
    if (achievement.includes("Master") || achievement.includes("Champion")) {
      return <Medal className="w-4 h-4 text-purple-500" />;
    }
    if (achievement.includes("Victor") || achievement.includes("Leader")) {
      return <Award className="w-4 h-4 text-orange-500" />;
    }
    return <Star className="w-4 h-4 text-blue-500" />;
  };

  const getAchievementColor = (achievement: string) => {
    if (achievement.includes("Legendary") || achievement.includes("Nuclear")) {
      return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white";
    }
    if (achievement.includes("Master") || achievement.includes("Champion")) {
      return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
    }
    if (achievement.includes("Victor") || achievement.includes("Leader")) {
      return "bg-gradient-to-r from-orange-500 to-red-500 text-white";
    }
    return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
  };

  return (
    <Card className="border-0 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Succès & Réalisations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl hover:bg-muted/30 transition-colors"
            >
              <div className="p-2 bg-background rounded-lg">
                {getAchievementIcon(achievement)}
              </div>
              <div className="flex-1">
                <Badge
                  className={`${getAchievementColor(achievement)} border-0`}
                >
                  {achievement}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {achievements.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Trophy className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>Aucun succès pour le moment</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
