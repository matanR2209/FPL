import * as React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {playersData} from "../../dummy_data/players_dummy_data";
import {makeStyles} from "@material-ui/core/styles";
import TrendingSection from "./TrendingSection";

interface IProps {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            container: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between"
            },
            trendingSection: {},
            trendingSectionHeader: {
                fontSize: "2em",
                margin: "1em 0"
            },
            trendingListContainer: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }
        }
    ),
);

const TRENDING_TITLES = {
    MOST_TRANSFER_IN: "GW Most transferred in",
    MOST_TRANSFER_OUT: "GW Most transferred in",
    MOST_CAPTAINED: "GW Most Captained",
    WATCHLIST_STARS: "Watchlist stars"
}


export default function TrendingContainer(props: IProps){
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <TrendingSection playersInSection={[playersData[12], playersData[8], playersData[3], playersData[15], playersData[11]]} title={TRENDING_TITLES.MOST_TRANSFER_IN}/>
            <TrendingSection playersInSection={[playersData[13], playersData[9], playersData[2], playersData[12], playersData[12]]} title={TRENDING_TITLES.MOST_TRANSFER_OUT}/>
            <TrendingSection playersInSection={[playersData[15], playersData[11], playersData[7], playersData[10], playersData[3]]} title={TRENDING_TITLES.MOST_CAPTAINED}/>
            <TrendingSection playersInSection={[playersData[1], playersData[8], playersData[12], playersData[6], playersData[9]]} title={TRENDING_TITLES.WATCHLIST_STARS}/>
        </div>
    )

}