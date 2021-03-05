import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import PlayerCard from "../PlayerCard";
import {IPlayer} from "../../types/IPlayer";
import TrendingGraphContainer from "./TrendingGraphContainer";
import TrendingSummaryContainer from "./TrendingSummaryContainer";
import {ITrendingStats} from "../../types/ITrending";

interface IProps {
    classes: any;
    player: IPlayer;
    playerTrendingStats: ITrendingStats
}

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        margin: "1em 0"
    },
    playerCardContainer: {
        margin: "auto 0"
    }
});


class TrendingRowContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const {classes, player, playerTrendingStats} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.playerCardContainer}><PlayerCard player={player} /></div>
                <TrendingGraphContainer player={player} trendingGraphStats={playerTrendingStats.gwHistoryStats}/>
                <TrendingSummaryContainer playerTrendingStats={playerTrendingStats}/>
            </div>
        );
    }
}

export default withStyles(styles)(TrendingRowContainer)