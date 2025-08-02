export interface CODMLoadout {
  id: string;
  name: string;
  primaryWeapon: string;
  secondaryWeapon: string;
  perks: string[];
  scorestreaks: string[];
}

export interface CODMProfile {
  username: string;
  uuid: string;
  level: number;
  rank: string;
  kdRatio: number;
  totalKills: number;
  totalDeaths: number;
  gamesPlayed: number;
  winRate: number;
  currentSeason: number;
  clan: string;
  favoriteWeapon: string;
  favoriteMode: string;
  profilePicture: string;
  codmAvatar: string;
  loadouts: CODMLoadout[];
  achievements: string[];
  lastActive: string;
}

export interface Member {
  id: string;
  name: string;
  avatar?: string;
  mjPoints: {
    total: number;
    lastMonth: number;
  };
  brPoints: {
    total: number;
    lastMonth: number;
  };
  codmProfile: CODMProfile;
}

export type Category = "MJ" | "BR";

export interface LeaderboardEntry {
  member: Member;
  rank: number;
  points: number;
  lastMonthPoints: number;
  change: number; // Position change from last month (positive = moved up)
}

// Mock data for demonstration
export const mockMembers: Member[] = [
  {
    id: "1",
    name: "Alex Thompson",
    avatar: "AT",
    mjPoints: { total: 2850, lastMonth: 420 },
    brPoints: { total: 3120, lastMonth: 380 },
    codmProfile: {
      username: "ShadowStrike_AT",
      uuid: "6547829103",
      level: 150,
      rank: "Legendary",
      kdRatio: 2.8,
      totalKills: 145230,
      totalDeaths: 51868,
      gamesPlayed: 3420,
      winRate: 78.5,
      currentSeason: 11,
      clan: "Elite Squad",
      favoriteWeapon: "AK-47",
      favoriteMode: "Search & Destroy",
      profilePicture: "/profiles/alex.jpg",
      codmAvatar: "/codm-avatars/shadow-soldier.jpg",
      loadouts: [
        {
          id: "l1",
          name: "Assault Main",
          primaryWeapon: "AK-47",
          secondaryWeapon: "MW11",
          perks: ["Fast Recover", "Ghost", "Dead Silence"],
          scorestreaks: ["UAV", "Predator Missile", "VTOL"],
        },
        {
          id: "l2",
          name: "Sniper Setup",
          primaryWeapon: "DLQ33",
          secondaryWeapon: "J358",
          perks: ["Tactical Mask", "Cold-Blooded", "Alert"],
          scorestreaks: ["Counter UAV", "Cluster Strike", "Chopper Gunner"],
        },
      ],
      achievements: [
        "Legendary Ranked",
        "Nuclear Medal",
        "Clan War Victor",
        "Perfect Soldier",
      ],
      lastActive: "2024-01-15T10:30:00Z",
    },
  },
  {
    id: "2",
    name: "Sarah Chen",
    avatar: "SC",
    mjPoints: { total: 2920, lastMonth: 510 },
    brPoints: { total: 2680, lastMonth: 340 },
  },
  {
    id: "3",
    name: "Marcus Johnson",
    avatar: "MJ",
    mjPoints: { total: 2340, lastMonth: 280 },
    brPoints: { total: 2940, lastMonth: 450 },
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    avatar: "ER",
    mjPoints: { total: 2780, lastMonth: 390 },
    brPoints: { total: 2520, lastMonth: 310 },
  },
  {
    id: "5",
    name: "David Kim",
    avatar: "DK",
    mjPoints: { total: 2190, lastMonth: 320 },
    brPoints: { total: 2860, lastMonth: 420 },
  },
  {
    id: "6",
    name: "Rachel Foster",
    avatar: "RF",
    mjPoints: { total: 2650, lastMonth: 350 },
    brPoints: { total: 2440, lastMonth: 290 },
  },
  {
    id: "7",
    name: "James Wilson",
    avatar: "JW",
    mjPoints: { total: 2410, lastMonth: 310 },
    brPoints: { total: 2720, lastMonth: 360 },
  },
  {
    id: "8",
    name: "Maya Patel",
    avatar: "MP",
    mjPoints: { total: 2090, lastMonth: 250 },
    brPoints: { total: 2380, lastMonth: 280 },
  },
  {
    id: "9",
    name: "Chris Anderson",
    avatar: "CA",
    mjPoints: { total: 1980, lastMonth: 230 },
    brPoints: { total: 2290, lastMonth: 260 },
  },
  {
    id: "10",
    name: "Sophie Turner",
    avatar: "ST",
    mjPoints: { total: 1850, lastMonth: 200 },
    brPoints: { total: 2150, lastMonth: 240 },
  },
];

export function getLeaderboard(category: Category): LeaderboardEntry[] {
  const sorted = [...mockMembers].sort((a, b) => {
    const aPoints = category === "MJ" ? a.mjPoints.total : a.brPoints.total;
    const bPoints = category === "MJ" ? b.mjPoints.total : b.brPoints.total;
    return bPoints - aPoints;
  });

  return sorted.map((member, index) => ({
    member,
    rank: index + 1,
    points: category === "MJ" ? member.mjPoints.total : member.brPoints.total,
    lastMonthPoints:
      category === "MJ" ? member.mjPoints.lastMonth : member.brPoints.lastMonth,
    change: Math.floor(Math.random() * 6) - 2, // Random change for demo
  }));
}
