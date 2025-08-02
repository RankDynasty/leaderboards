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
    codmProfile: {
      username: "PhoenixSC",
      uuid: "8291034756",
      level: 142,
      rank: "Master",
      kdRatio: 2.3,
      totalKills: 98745,
      totalDeaths: 42934,
      gamesPlayed: 2890,
      winRate: 82.1,
      currentSeason: 11,
      clan: "Phoenix Rising",
      favoriteWeapon: "M4",
      favoriteMode: "Hardpoint",
      profilePicture: "/profiles/sarah.jpg",
      codmAvatar: "/codm-avatars/phoenix-warrior.jpg",
      loadouts: [
        {
          id: "l3",
          name: "SMG Rush",
          primaryWeapon: "RUS-79U",
          secondaryWeapon: "MW11",
          perks: ["Lightweight", "Ghost", "Dead Silence"],
          scorestreaks: ["UAV", "Hunter Killer", "Lightning Strike"],
        },
      ],
      achievements: ["Master Ranked", "Clutch Master", "Speed Demon"],
      lastActive: "2024-01-15T09:15:00Z",
    },
  },
  {
    id: "3",
    name: "Marcus Johnson",
    avatar: "MJ",
    mjPoints: { total: 2340, lastMonth: 280 },
    brPoints: { total: 2940, lastMonth: 450 },
    codmProfile: {
      username: "TitanMJ",
      uuid: "1029384756",
      level: 138,
      rank: "Master",
      kdRatio: 1.9,
      totalKills: 87650,
      totalDeaths: 46132,
      gamesPlayed: 3156,
      winRate: 75.3,
      currentSeason: 11,
      clan: "Titan Force",
      favoriteWeapon: "Type 25",
      favoriteMode: "Domination",
      profilePicture: "/profiles/marcus.jpg",
      codmAvatar: "/codm-avatars/titan-soldier.jpg",
      loadouts: [
        {
          id: "l4",
          name: "Support Build",
          primaryWeapon: "Type 25",
          secondaryWeapon: "MW11",
          perks: ["Flak Jacket", "Hardwired", "Engineer"],
          scorestreaks: ["UAV", "Care Package", "Sentry Gun"],
        },
      ],
      achievements: ["Team Player", "Objective Master", "Veteran"],
      lastActive: "2024-01-14T20:45:00Z",
    },
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    avatar: "ER",
    mjPoints: { total: 2780, lastMonth: 390 },
    brPoints: { total: 2520, lastMonth: 310 },
    codmProfile: {
      username: "VipeER",
      uuid: "3847562019",
      level: 145,
      rank: "Master",
      kdRatio: 2.1,
      totalKills: 112340,
      totalDeaths: 53495,
      gamesPlayed: 3678,
      winRate: 79.2,
      currentSeason: 11,
      clan: "Viper Squad",
      favoriteWeapon: "ASM10",
      favoriteMode: "Team Deathmatch",
      profilePicture: "/profiles/elena.jpg",
      codmAvatar: "/codm-avatars/viper-assassin.jpg",
      loadouts: [
        {
          id: "l5",
          name: "AR Versatile",
          primaryWeapon: "ASM10",
          secondaryWeapon: "J358",
          perks: ["Fast Recover", "Toughness", "Dead Silence"],
          scorestreaks: ["UAV", "Predator Missile", "VTOL"],
        },
      ],
      achievements: ["Marksman", "Consistent Player", "Squad Leader"],
      lastActive: "2024-01-15T11:22:00Z",
    },
  },
  {
    id: "5",
    name: "David Kim",
    avatar: "DK",
    mjPoints: { total: 2190, lastMonth: 320 },
    brPoints: { total: 2860, lastMonth: 420 },
    codmProfile: {
      username: "DragonDK",
      uuid: "5647382910",
      level: 134,
      rank: "Pro",
      kdRatio: 1.7,
      totalKills: 76890,
      totalDeaths: 45235,
      gamesPlayed: 2567,
      winRate: 72.8,
      currentSeason: 11,
      clan: "Dragon Clan",
      favoriteWeapon: "QQ9",
      favoriteMode: "Battle Royale",
      profilePicture: "/profiles/david.jpg",
      codmAvatar: "/codm-avatars/dragon-knight.jpg",
      loadouts: [
        {
          id: "l6",
          name: "BR Loadout",
          primaryWeapon: "QQ9",
          secondaryWeapon: "MW11",
          perks: ["Mechanic", "Medic", "Scout"],
          scorestreaks: ["UAV", "Care Package", "Cluster Strike"],
        },
      ],
      achievements: ["BR Champion", "Survivor", "Team Support"],
      lastActive: "2024-01-15T08:30:00Z",
    },
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
