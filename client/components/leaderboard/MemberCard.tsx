import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LeaderboardEntry } from "@shared/leaderboard";
import { ChevronUp, ChevronDown, Minus, Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface MemberCardProps {
  entry: LeaderboardEntry;
  showAnimation?: boolean;
}

export function MemberCard({ entry, showAnimation = false }: MemberCardProps) {
  const { member, rank, points, lastMonthPoints, change } = entry;

  const getRankIcon = () => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-orange-500" />;
    return null;
  };

  const getChangeIcon = () => {
    if (change > 0) return <ChevronUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <ChevronDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const getRankStyle = () => {
    if (rank <= 3) return "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20";
    return "bg-card border-border";
  };

  return (
    <Card
      className={cn(
        "p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
        getRankStyle(),
        showAnimation && "animate-in slide-in-from-bottom-2 duration-500"
      )}
      style={{ animationDelay: showAnimation ? `${rank * 50}ms` : undefined }}
    >
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 font-bold text-lg">
          {rank <= 3 ? getRankIcon() : rank}
        </div>

        {/* Avatar and Name */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Avatar className="w-11 h-11 border-2 border-background shadow-sm">
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-semibold">
              {member.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground truncate">{member.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              {getChangeIcon()}
              <span className="text-sm text-muted-foreground">
                {change > 0 && `+${change}`}
                {change < 0 && change}
                {change === 0 && '0'} from last month
              </span>
            </div>
          </div>
        </div>

        {/* Points */}
        <div className="text-right">
          <div className="font-bold text-xl text-foreground">
            {points.toLocaleString()}
          </div>
          <Badge variant="secondary" className="text-xs font-medium">
            +{lastMonthPoints} this month
          </Badge>
        </div>
      </div>
    </Card>
  );
}
