import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import PlayerCard from "../PlayerCard";
import {IPlayer} from "../../types/IPlayer";
import TrendingGraphContainer from "./TrendingGraphContainer";
import TrendingSummaryContainer from "./TrendingSummaryContainer";
import {ITrendingStats} from "../../types/ITrending";
import {stores} from "../../state";

interface IProps {
    classes: any;
    player: IPlayer;
}

interface ILocalState {
    trendingStats?: ITrendingStats;
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
    public state: ILocalState = {
     trendingStats: undefined
    }

    public async componentDidMount() {
        // const response = await stores.trendingStore.getPlayerTrendingStats(this.props.player.id);
        console.log(111111);
        // if(response.data) {
        //     this.setState({...this.state, trendingStats: response.data})
        // }
    }

    public render() {
        const {classes, player} = this.props;
        const { trendingStats } = this.state;

        return trendingStats? (
            <div className={classes.root}>
                <div className={classes.playerCardContainer}><PlayerCard player={player} /></div>
                <TrendingGraphContainer player={player} trendingGraphStats={trendingStats.gwHistoryStats}/>
                <TrendingSummaryContainer playerTrendingStats={trendingStats}/>
            </div>
        ) : <div>X</div>;
    }
}

export default withStyles(styles)(TrendingRowContainer)