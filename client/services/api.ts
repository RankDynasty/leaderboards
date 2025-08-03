const API_URL = import.meta.env.VITE_API_URL;

export async function fetchLeaderboardEntry(category: string) {
    const endpoint = category === "MJ" ? "MJ_leaderboard_monthly" : "BR_leaderboard_monthly";
    const response = await fetch(`${API_URL}/collections/${endpoint}/records?expand=player`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        });
    if (!response.ok) {
        throw new Error("Failed to fetch leaderboard entry");
    }
    const data = await response.json();

    // enumerate data 
    const leaderboardEntries = data.items.map((item: any, index: number) => ({
        member: {
            ...item.expand.player,
            name: item.expand.player.pseudo,
            brPoints: {
                total: item.score_month,
                lastMonth: item.score_last_month,
            },
            mjPoints: {
                total: item.score_month,
                lastMonth: item.score_last_month,
            },
            avatar: item.expand.player.pseudo.charAt(0).toUpperCase() + "・"
        },
        points: item.score_month,
        rank: index + 1, // Assign rank based on index
        change: item.change || 0, // Default to 0 if change is not provided
    }));

    console.log("Fetched leaderboard entries:", leaderboardEntries);

    return leaderboardEntries;
}