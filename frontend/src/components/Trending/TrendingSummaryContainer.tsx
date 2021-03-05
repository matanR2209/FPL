import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import TrendingSummary from "./TrendingSummary";
import {ITrendingStats} from "../../types/ITrending";

interface IProps {
    classes: any;
    playerTrendingStats: ITrendingStats
}

const styles = (theme: Theme) => createStyles({
    root: {
        marginLeft: "1em"
    }
});


class TrendingSummaryContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const {classes, playerTrendingStats} = this.props;
        return (
            <div className={classes.root}>
                <TrendingSummary latestGwsStats={playerTrendingStats.gwHistoryStats}
                                 currentGwStats={playerTrendingStats.currentGwStats}
                                 dailyStats={playerTrendingStats.dailyStats}/>
            </div>
        );
    }
}


export default withStyles(styles)(TrendingSummaryContainer)