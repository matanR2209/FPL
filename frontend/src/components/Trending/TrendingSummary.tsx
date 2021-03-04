import * as React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

interface IProps {

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
            fontWeight: 600
        },
        statValue: {
            color: "#C0C0C0"
        }
    }
    ),
);


export default function TrendingSummary(props: IProps){
    const classes = useStyles();
    return (
        <>
            <div>Trending summary</div>
            <div className={classes.totalSummaryStatsContainer}>
                <div className={classes.statsSection}>
                    <div className={classes.statsSectionHeader}>General stats</div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>Trend: </div>
                        <div>4.5%</div>
                    </div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>Total owners: </div>
                        <div>25,578</div>
                    </div>
                </div>

                <div className={classes.statsSection}>
                    <div className={classes.statsSectionHeader}>Daily stats</div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>Daily trend: </div>
                        <div>-2%</div>
                    </div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>On opening owners: </div>
                        <div>1,578</div>
                    </div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>On close owners: </div>
                        <div>12,000</div>
                    </div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>Highest: </div>
                        <div>25,000</div>
                    </div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>lowest: </div>
                        <div>900</div>
                    </div>
                </div>

                <div className={classes.statsSection}>
                    <div className={classes.statsSectionHeader}>Daily stats</div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>Weekly trend: </div>
                        <div>7.5%</div>
                    </div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>Highest: </div>
                        <div>50,000</div>
                    </div>
                    <div className={classes.statsRow}>
                        <div className={classes.statHeader}>lowest: </div>
                        <div>100</div>
                    </div>
                </div>
            </div>
        </>
    )
}