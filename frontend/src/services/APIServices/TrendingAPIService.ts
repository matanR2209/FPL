export default class TrendingAPIService {
    public static getPlayerTrendingStats = (playerId: number) => {

        return {
            gwHistoryStats: [
                {
                    gwNumber: 1,
                    totalOwners: 10000,
                    transferIn: 10000,
                    transferOut: 0
                },
                {
                    gwNumber: 2,
                    totalOwners: 11000,
                    transferIn: 2000,
                    transferOut: 1000
                },
                {
                    gwNumber: 3,
                    totalOwners: 15500,
                    transferIn: 5000,
                    transferOut: 500
                },
                {
                    gwNumber: 4,
                    totalOwners: 16000,
                    transferIn: 2000,
                    transferOut: 1500
                },
                {
                    gwNumber: 5,
                    totalOwners: 12000,
                    transferIn: 1000,
                    transferOut: 5000
                },
                {
                    gwNumber: 6,
                    totalOwners: 12000,
                    transferIn: 1000,
                    transferOut: 5000
                },
                {
                    gwNumber: 7,
                    totalOwners: 21000,
                    transferIn: 10000,
                    transferOut: 1000
                },
                {
                    gwNumber: 8,
                    totalOwners: 20000,
                    transferIn: 2000,
                    transferOut: 3000
                },
                {
                    gwNumber: 9,
                    totalOwners: 17000,
                    transferIn: 3000,
                    transferOut: 6000
                },
                {
                    gwNumber: 10,
                    totalOwners: 15000,
                    transferIn: 3000,
                    transferOut: 5000
                }
            ],
            currentGwStats: {
                totalOwners: 15500,
                transferIn: 1000,
                transferOut: 500,
                onOpeningOwners: 15000
            },
            dailyStats: {
                onDayStartOwners: 15500,
                currentOwners: 17500,
                highest: 19000,
                lowest: 14000
            }
        }
    }
}
