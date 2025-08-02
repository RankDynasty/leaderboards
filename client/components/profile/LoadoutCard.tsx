import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CODMLoadout } from "@shared/leaderboard";
import { Sword, Shield, Zap, Target } from "lucide-react";

interface LoadoutCardProps {
  loadout: CODMLoadout;
  isMain?: boolean;
}

export function LoadoutCard({ loadout, isMain = false }: LoadoutCardProps) {
  return (
    <Card
      className={`border ${isMain ? "border-primary/50 bg-primary/5" : "border-border bg-card"} transition-all hover:shadow-md`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg">{loadout.name}</span>
          {isMain && (
            <Badge variant="default" className="text-xs">
              Principal
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Weapons */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Sword className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Arme Principale</p>
              <p className="font-semibold text-foreground">
                {loadout.primaryWeapon}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Target className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Arme Secondaire</p>
              <p className="font-semibold text-foreground">
                {loadout.secondaryWeapon}
              </p>
            </div>
          </div>
        </div>

        {/* Perks */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-green-500" />
            <p className="text-sm font-medium text-muted-foreground">Atouts</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {loadout.perks.map((perk, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {perk}
              </Badge>
            ))}
          </div>
        </div>

        {/* Scorestreaks */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-yellow-500" />
            <p className="text-sm font-medium text-muted-foreground">
              Séries d'Éliminations
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {loadout.scorestreaks.map((scorestreak, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {scorestreak}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
