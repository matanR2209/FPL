import * as React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {playersData} from "../../dummy_data/players_dummy_data";
import TrendingSection from "./TrendingSection";
import {stores} from "../../state";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {observer} from "mobx-react";

interface IProps {}


const styles = (theme: Theme) => createStyles({
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
});

const TRENDING_TITLES = {
    MOST_TRANSFER_IN: "GW Most transferred in",
    MOST_TRANSFER_OUT: "GW Most transferred out",
    MOST_SELECTED: "Most selected",
    WATCHLIST_STARS: "Watchlist stars"
}

@observer
class TrendingContainer extends React.Component<
    IProps & Partial<WithStyles<any>>
    > {
        public render() {
            const { classes } = this.props;
            return (
                <div className={classes!.container}>
                    <TrendingSection playersInSection={stores.playersStore.mostTransferredIn} title={TRENDING_TITLES.MOST_TRANSFER_IN}/>
                    <TrendingSection playersInSection={stores.playersStore.mostTransferredOut} title={TRENDING_TITLES.MOST_TRANSFER_OUT}/>
                    <TrendingSection playersInSection={stores.playersStore.mostSelected} title={TRENDING_TITLES.MOST_SELECTED}/>
                    <TrendingSection playersInSection={[playersData[1], playersData[8], playersData[12], playersData[6], playersData[9]]} title={TRENDING_TITLES.WATCHLIST_STARS}/>
                </div>
            )
        }

}

export default withStyles(styles)(TrendingContainer)