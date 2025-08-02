import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Trophy, MapPin, Calendar } from "lucide-react";

export function ClanHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground">
        <div className="container mx-auto px-4 py-12 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-current rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border border-current rounded-lg rotate-45"></div>
            <div className="absolute bottom-10 left-1/4 w-12 h-12 border border-current rounded-full"></div>
            <div className="absolute bottom-20 right-1/3 w-8 h-8 border-2 border-current rounded-lg"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Clan Logo/Shield */}
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 bg-primary-foreground/20 rounded-full border-4 border-primary-foreground/30 flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            
            {/* Clan Name */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              RANK DYNASTY
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 opacity-90">
              E-Sport Madagascar
            </h2>
            
            {/* Clan Tagline */}
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
              Élite de Call of Duty Mobile Madagascar - Excellence, Stratégie, Victoire
            </p>
            
            {/* Clan Stats */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-base px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                10 Membres
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-base px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                Clan Légendaire
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-base px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Madagascar
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-base px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Fondé en 2023
              </Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Clan Description Card */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Notre Mission</h3>
                <p className="text-muted-foreground text-sm">
                  Dominer les tournois CODM et représenter Madagascar avec honneur sur la scène internationale.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Nos Valeurs</h3>
                <p className="text-muted-foreground text-sm">
                  Esprit d'équipe, excellence technique, fair-play et développement des talents locaux.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Nos Objectifs</h3>
                <p className="text-muted-foreground text-sm">
                  Championnats régionaux, qualification mondiale et formation de la nouvelle génération.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
