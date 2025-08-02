import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockMembers } from "@shared/leaderboard";
import { MemberThumbnail } from "./MemberThumbnail";
import { Users, Trophy, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function MembersGrid() {
  const totalMJPoints = mockMembers.reduce((sum, member) => sum + member.mjPoints.total, 0);
  const totalBRPoints = mockMembers.reduce((sum, member) => sum + member.brPoints.total, 0);
  const averageKD = (mockMembers.reduce((sum, member) => sum + member.codmProfile.kdRatio, 0) / mockMembers.length).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Nos Guerriers Légendaires
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez les membres d'élite qui portent haut les couleurs de Rank Dynasty E-Sport Madagascar
        </p>
      </div>

      {/* Clan Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{mockMembers.length}</p>
            <p className="text-sm text-muted-foreground">Membres Actifs</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{totalMJPoints.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Points MJ</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-4 text-center">
            <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{totalBRPoints.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Points BR</p>
          </CardContent>
        </Card>
        
        <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{averageKD}</p>
            <p className="text-sm text-muted-foreground">K/D Moyen</p>
          </CardContent>
        </Card>
      </div>

      {/* Members Grid */}
      <Card className="border-0 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Membres du Clan
            </CardTitle>
            <Link to="/leaderboard">
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Voir le Classement
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockMembers.map((member, index) => (
              <div 
                key={member.id}
                className="animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MemberThumbnail member={member} index={index} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center py-8">
        <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Rejoignez l'Élite Madagascar
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vous pensez avoir le niveau pour rejoindre Rank Dynasty ? 
              Prouvez votre valeur et devenez partie intégrante de la légende malgache.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Niveau minimum : Master
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                K/D minimum : 1.5
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Esprit d'équipe requis
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
