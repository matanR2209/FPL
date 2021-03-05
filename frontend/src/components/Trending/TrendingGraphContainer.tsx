import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import TrendingGraph from "./TrendingGraph";
import {IPlayer} from "../../types/IPlayer";
import {IGwStats} from "../../types/ITrending";

interface IProps {
    classes: any;
    player: IPlayer;
    trendingGraphStats: IGwStats[]
}

const styles = (theme: Theme) => createStyles({
    root: {
        marginLeft: "1em"
    }
});

const generateRandomNum = () => {
    return Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
}



class ComponentName extends React.Component<IProps & Partial<WithStyles<any>>> {

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
        trendingGraphStats.forEach(gw => {
            const tempGwStats = [`GW ${gw.gwNumber}`, gw.totalOwners, gw.transferIn, gw.transferOut];
            stats.push(tempGwStats);
        })
        return stats;
    }
}

export default withStyles(styles)(ComponentName)