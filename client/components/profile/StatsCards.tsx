import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CODMProfile } from "@shared/leaderboard";
import { 
  Target, 
  Zap, 
  GamepadIcon, 
  TrendingUp, 
  Crosshair, 
  Heart,
  Award
} from "lucide-react";

interface StatsCardsProps {
  profile: CODMProfile;
}

export function StatsCards({ profile }: StatsCardsProps) {
  const stats = [
    {
      title: "K/D Ratio",
      value: profile.kdRatio.toFixed(2),
      icon: Target,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Taux de Victoire",
      value: `${profile.winRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Total Kills",
      value: profile.totalKills.toLocaleString(),
      icon: Crosshair,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Total Deaths",
      value: profile.totalDeaths.toLocaleString(),
      icon: Heart,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Parties Jouées",
      value: profile.gamesPlayed.toLocaleString(),
      icon: GamepadIcon,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Niveau",
      value: profile.level.toString(),
      icon: Award,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ];

  return (
    <Card className="border-0 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          Statistiques de Jeu
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className={`p-3 rounded-xl ${stat.bgColor} mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Favorite Weapon and Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center p-4 bg-muted/20 rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">Arme Favorite</p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {profile.favoriteWeapon}
            </Badge>
          </div>
          <div className="text-center p-4 bg-muted/20 rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">Mode Favori</p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {profile.favoriteMode}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
