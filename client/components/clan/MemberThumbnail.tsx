import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Member } from "@shared/leaderboard";
import { Link } from "react-router-dom";
import { Trophy, Target, Shield, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface MemberThumbnailProps {
  member: Member;
  index: number;
}

export function MemberThumbnail({ member, index }: MemberThumbnailProps) {
  const getRankIcon = () => {
    switch (member.codmProfile.rank) {
      case "Legendary":
        return <Trophy className="w-4 h-4 text-yellow-500" />;
      case "Master":
        return <Shield className="w-4 h-4 text-purple-500" />;
      case "Pro":
        return <Target className="w-4 h-4 text-blue-500" />;
      default:
        return <Shield className="w-4 h-4 text-green-500" />;
    }
  };

  const getRankColor = () => {
    switch (member.codmProfile.rank) {
      case "Legendary":
        return "from-yellow-500/20 to-orange-500/20 border-yellow-500/30";
      case "Master":
        return "from-purple-500/20 to-pink-500/20 border-purple-500/30";
      case "Pro":
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30";
      default:
        return "from-green-500/20 to-emerald-500/20 border-green-500/30";
    }
  };

  return (
    <Link to={`/member/${member.id}`} className="block group">
      <Card
        className={cn(
          "border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden bg-gradient-to-br",
          getRankColor(),
        )}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        <CardContent className="p-6 text-center">
          {/* Member Avatar */}
          <div className="relative mb-4">
            <Avatar className="w-20 h-20 mx-auto border-4 border-background shadow-lg group-hover:scale-110 transition-transform duration-300">
              <AvatarImage
                src={member.codmProfile.profilePicture}
                alt={member.name}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary/30 to-primary/20 text-primary text-xl font-bold">
                {member.avatar}
              </AvatarFallback>
            </Avatar>

            {/* Online Status */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Member Info */}
          <div className="space-y-3">
            {/* Real Name */}
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {member.name}
            </h3>

            {/* CODM Username */}
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pseudo CODM</p>
              <p className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md text-sm">
                @{member.codmProfile.username}
              </p>
            </div>

            {/* Rank and Level */}
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="text-xs">
                {getRankIcon()}
                <span className="ml-1">{member.codmProfile.rank}</span>
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Niv. {member.codmProfile.level}
              </Badge>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">
                  {member.codmProfile.kdRatio}
                </p>
                <p className="text-xs text-muted-foreground">K/D</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">
                  {member.codmProfile.winRate.toFixed(0)}%
                </p>
                <p className="text-xs text-muted-foreground">Victoires</p>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
              <div className="flex items-center justify-center gap-1 text-primary text-sm">
                <ExternalLink className="w-4 h-4" />
                <span>Voir le profil</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
