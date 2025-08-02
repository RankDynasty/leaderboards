import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CODMProfile } from "@shared/leaderboard";
import { ArrowLeft, Shield, Trophy, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileHeaderProps {
  profile: CODMProfile;
  memberName: string;
  memberAvatar: string;
}

export function ProfileHeader({
  profile,
  memberName,
  memberAvatar,
}: ProfileHeaderProps) {
  const getLastActiveTime = () => {
    const lastActive = new Date(profile.lastActive);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return "En ligne";
    if (diffInHours < 24) return `Il y a ${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `Il y a ${diffInDays}j`;
  };

  const getRankColor = () => {
    switch (profile.rank) {
      case "Legendary":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "Master":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Pro":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Elite":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link to="/">
        <Button variant="ghost" size="sm" className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au classement
        </Button>
      </Link>

      {/* Main Profile Card */}
      <Card className="border-0 bg-gradient-to-br from-card via-card to-muted/20 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatars Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              {/* Profile Picture */}
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
                  <AvatarImage src={profile.profilePicture} alt={memberName} />
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-2xl font-bold">
                    {memberAvatar}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* CODM Avatar */}
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground mb-2">
                  Avatar CODM
                </p>
                <Avatar className="w-20 h-20 border-2 border-primary/20 shadow-lg mx-auto sm:mx-0">
                  <AvatarImage src={profile.codmAvatar} alt="CODM Avatar" />
                  <AvatarFallback className="bg-gradient-to-br from-primary/30 to-primary/20 text-primary font-bold">
                    CODM
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              {/* Name and Username */}
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  {memberName}
                </h1>
                <p className="text-xl text-muted-foreground">
                  @{profile.username}
                </p>
              </div>

              {/* Rank and Level */}
              <div className="flex flex-wrap gap-3">
                <Badge
                  className={`${getRankColor()} text-white border-0 px-3 py-1`}
                >
                  <Shield className="w-4 h-4 mr-1" />
                  {profile.rank}
                </Badge>
                <Badge variant="secondary">
                  <Trophy className="w-4 h-4 mr-1" />
                  Niveau {profile.level}
                </Badge>
                <Badge variant="outline">
                  <Target className="w-4 h-4 mr-1" />
                  Saison {profile.currentSeason}
                </Badge>
                <Badge variant="outline">
                  <Clock className="w-4 h-4 mr-1" />
                  {getLastActiveTime()}
                </Badge>
              </div>

              {/* UUID and Clan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-sm text-muted-foreground">UUID</p>
                  <p className="font-mono text-foreground font-semibold">
                    {profile.uuid}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Clan</p>
                  <p className="text-foreground font-semibold">
                    {profile.clan}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
