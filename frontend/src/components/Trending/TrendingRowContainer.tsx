import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import PlayerCard from "../PlayerCard";
import {IPlayer} from "../../types/IPlayer";
import TrendingGraphContainer from "./TrendingGraphContainer";
import TrendingSummaryContainer from "./TrendingSummaryContainer";
import {ITrendingStats} from "../../types/ITrending";
import {stores} from "../../state";
import {observer} from "mobx-react";

interface IProps {
    classes: any;
    player: IPlayer;
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

@observer
class TrendingRowContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const {classes, player} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.playerCardContainer}>
                    <PlayerCard player={player} />
                </div>
                {this.renderTrendingSections()}
            </div>
        );
    }

    private renderTrendingSections = () => {
        if(stores.trendingStore.selectedTeamPlayersTrending.length > 0) {
            // const trendingStats = stores.trendingStore.selectedTeamPlayersTrending.filter((stats) => stats.playerId === this.props.player.id)[0]
            const trendingStats = stores.trendingStore.selectedTeamPlayersTrending.filter((stats) => stats.playerId === 1)[0];
            return (<>
                <TrendingGraphContainer trendingGraphStats={trendingStats.gwHistoryStats}/>
                <TrendingSummaryContainer playerTrendingStats={trendingStats}/>
            </>)
        }
        return  <div>Loading</div>;
    }
}

export default withStyles(styles)(TrendingRowContainer)