import { useParams } from "react-router-dom";
import { mockMembers } from "@shared/leaderboard";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { StatsCards } from "@/components/profile/StatsCards";
import { LoadoutCard } from "@/components/profile/LoadoutCard";
import { AchievementsSection } from "@/components/profile/AchievementsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, Calendar } from "lucide-react";

export default function MemberProfile() {
  const { memberId } = useParams();

  const member = mockMembers.find((m) => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Membre introuvable
          </h1>
          <p className="text-muted-foreground">
            Le profil demandé n'existe pas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Profile Header */}
        <ProfileHeader
          profile={member.codmProfile}
          memberName={member.name}
          memberAvatar={member.avatar || "??"}
        />

        {/* Stats Overview */}
        <div className="mt-8">
          <StatsCards profile={member.codmProfile} />
        </div>

        {/* Loadouts Section */}
        <div className="mt-8">
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Configurations & Loadouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              {member.codmProfile.loadouts.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {member.codmProfile.loadouts.map((loadout, index) => (
                    <LoadoutCard
                      key={loadout.id}
                      loadout={loadout}
                      isMain={index === 0}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Settings className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Aucune configuration enregistrée</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <div className="mt-8">
          <AchievementsSection achievements={member.codmProfile.achievements} />
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Competition Points */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Points de Compétition
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="font-medium">MJ Category</span>
                <div className="text-right">
                  <p className="font-bold text-lg">
                    {member.mjPoints.total.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +{member.mjPoints.lastMonth} ce mois
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/20 rounded-lg">
                <span className="font-medium">BR Category</span>
                <div className="text-right">
                  <p className="font-bold text-lg">
                    {member.brPoints.total.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +{member.brPoints.lastMonth} ce mois
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Info */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Informations d'Activité
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Dernière activité
                  </span>
                  <span className="font-medium">
                    {new Date(member.codmProfile.lastActive).toLocaleDateString(
                      "fr-FR",
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saison actuelle</span>
                  <span className="font-medium">
                    Saison {member.codmProfile.currentSeason}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Clan</span>
                  <span className="font-medium">{member.codmProfile.clan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rang actuel</span>
                  <span className="font-medium">{member.codmProfile.rank}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
