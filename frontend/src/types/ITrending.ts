export interface ITrendingStats  {
    gwHistoryStats: IGwStats[],
    currentGwStats: ICurrentGwStats,
    dailyStats: IDailyStats
}

export interface IGwStats {
    gwNumber: number,
    totalOwners: number,
    transferIn: number,
    transferOut: number
}
export interface ICurrentGwStats {
    totalOwners: number,
    transferIn: number,
    transferOut: number
    onOpeningOwners: number;
}
export interface IDailyStats {
    onDayStartOwners: number,
    currentOwners: number,
    highest: number,
    lowest: number
}

export interface ILastGWStatsSummary {

}