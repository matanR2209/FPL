import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import TrendingGraph from "./TrendingGraph";
import {IGwStats} from "../../types/ITrending";

interface IProps {
    classes: any;
    trendingGraphStats: IGwStats[]
}

const styles = (theme: Theme) => createStyles({
    root: {
        marginLeft: "1em"
    }
});

class TrendingGraphContainer extends React.Component<IProps & Partial<WithStyles<any>>> {

    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <TrendingGraph trendingStats={this.generateTrendingStats()}/>
            </div>
        );
    }

    private generateTrendingStats = () => {
        const { trendingGraphStats } = this.props;
        const stats: any = [['GW', 'Owned by', 'Transfer in', 'Transfer out']];
        if(trendingGraphStats.length) {
            trendingGraphStats.forEach(gw => {
                const tempGwStats = [`GW ${gw.gwNumber}`, gw.totalOwners, gw.transferIn, gw.transferOut];
                stats.push(tempGwStats);
            })
            return stats;
        } else {
        }
    }
}

export default withStyles(styles)(TrendingGraphContainer)