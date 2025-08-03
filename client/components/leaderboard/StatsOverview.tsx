import { Card, CardContent } from "@/components/ui/card";
import { Category, mockMembers } from "@shared/leaderboard";
import { TrendingUp, Users, Target } from "lucide-react";

interface StatsOverviewProps {
  category: Category;
  entry: any[]; // Assuming entry is an array of leaderboard entries
}

export function StatsOverview({ category, entry }: StatsOverviewProps) {
  const totalMembers = entry.length;

  console.log("Total Members:", entry);

  const categoryData = entry.map((member) =>
    category === "MJ" ? member.mjPoints : member.brPoints,
  );

  console.log("Category Data:", categoryData);

  const totalPoints = categoryData.reduce(
    (sum, points) => sum + points.total,
    0,
  );


  const averagePoints = Math.round(totalPoints / totalMembers);

  const stats = [
    {
      title: "Total Membres",
      value: totalMembers,
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Total Points",
      value: totalPoints.toLocaleString(),
      icon: Target,
      color: "text-purple-500",
    },
    {
      title: "Score Moyenne",
      value: averagePoints.toLocaleString(),
      icon: TrendingUp,
      color: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.title}
          className="border-0 bg-gradient-to-br from-card to-muted/20"
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-background/50 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
