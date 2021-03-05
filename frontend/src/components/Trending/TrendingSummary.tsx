import * as React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ICurrentGwStats, IDailyStats, IGwStats} from "../../types/ITrending";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Utils from "../../Utils/Utils";

interface IProps {
    latestGwsStats: IGwStats[];
    currentGwStats: ICurrentGwStats;
    dailyStats: IDailyStats

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        totalSummaryStatsContainer: {
            display: "flex",
            flexDirection: "row"
        },
        statsSection: {
            marginRight: "1em",
            borderRight: "2px solid #808080",
            padding: "0 1em"
        },
        statsSectionHeader: {
            fontWeight: "bold",
            fontSize: "1.2em",
        },
        statsRow: {
            margin: ".3em 0",
            display: "flex",
            flexDirection: "row"
        },
        statHeader: {
            fontWeight: 600,
            display: "flex",
            margin: "auto 0"
        },
        statValue: {
            color: "#C0C0C0"
        },
        trend: {
            fontWeight: "bold",
            marginLeft: "auto",
            fontSize: "1.25em",
            display: "flex"
        },
        positiveTrend: {
            color: "#228B22"
        },
            negativeTrend: {
                color: "#C8232C"
            },
            trendingHeader: {
                fontWeight: 600,
                fontSize: "1.5em",
                marginRight: "1em",
                marginBottom: "1em"
            }
    }
    ),
);


export default function TrendingSummary(props: IProps){
    const classes = useStyles();
    const {latestGwsStats, currentGwStats, dailyStats} = props;

    const renderTrend = (trendValue: number) => {
        return (
            <div className={`${classes.trend} ${trendValue > 0? classes.positiveTrend : classes.negativeTrend}`}>
                <div>{` ${trendValue}%`}</div>
                <div>{trendValue > 0?
                    <ArrowUpwardIcon color={"inherit"}/> : <ArrowDownwardIcon color={"inherit"}/>}
                </div>
            </div>)
    }

    const renderLatestGwSummary = () => {
        return (
            <div className={classes.statsSection}>
                <div className={classes.statsSectionHeader}>Last 10 GW's</div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>Trend: </div>
                    {renderTrend(Utils.getTrendingValue(latestGwsStats[0].totalOwners, latestGwsStats[latestGwsStats.length - 1].totalOwners))}
                </div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>Total owners: </div>
                    <div>{currentGwStats.totalOwners}</div>
                </div>
            </div>
        )
    }

    const renderCurrentGwStats = () => {
        return (
            <div className={classes.statsSection}>
                <div className={classes.statsSectionHeader}>Current GW stats</div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>GW trend: </div>
                    {renderTrend(Utils.getTrendingValue(currentGwStats.onOpeningOwners , currentGwStats.totalOwners))}
                </div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>current owners: </div>
                    <div>{currentGwStats.totalOwners}</div>
                </div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>On opening owners: </div>
                    <div>{currentGwStats.onOpeningOwners}</div>
                </div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>Transferred in: </div>
                    <div>{currentGwStats.transferIn}</div>
                </div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>Transferred out: </div>
                    <div>{currentGwStats.transferOut}</div>
                </div>
            </div>
        )
    }

    const renderDailyStats = () => {
        return (
            <div className={classes.statsSection}>
                <div className={classes.statsSectionHeader}>Daily stats</div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>Daily trend: </div>
                    {renderTrend(Utils.getTrendingValue(dailyStats.onDayStartOwners, dailyStats.currentOwners))}
                </div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>Highest today: </div>
                    <div>{dailyStats.highest}</div>
                </div>
                <div className={classes.statsRow}>
                    <div className={classes.statHeader}>lowest today: </div>
                    <div>{dailyStats.lowest}</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={classes.trendingHeader}>Trending summary</div>
            <div className={classes.totalSummaryStatsContainer}>
                {renderLatestGwSummary()}
                {renderCurrentGwStats()}
                {renderDailyStats()}
            </div>
        </>
    )
}