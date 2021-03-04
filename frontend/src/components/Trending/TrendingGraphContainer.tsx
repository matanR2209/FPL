import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import TrendingGraph from "./TrendingGraph";
import {IPlayer} from "../../types/IPlayer";

interface IProps {
    classes: any;
    player: IPlayer;
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
        return {
            graphStats: [
                ['x', 'Owned by', 'Transfer in', 'Transfer out'],
                [0,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [1,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [2,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [3,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [4,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [5,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [6,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [7,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [8,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [9,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [10,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [11,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [12,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [13,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [14,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [15,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [16,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [17,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [18,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [19,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [20,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [21,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [22,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [23,generateRandomNum(),generateRandomNum(),generateRandomNum()],
                [24,generateRandomNum(),generateRandomNum(),generateRandomNum()],
            ]
        }
    }
}

export default withStyles(styles)(ComponentName)