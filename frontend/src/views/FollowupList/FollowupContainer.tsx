import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Paper from "@material-ui/core/Paper";
import {IPlayer} from "../../types/Player";
import {playersData} from "../../dummy_data/players_dummy_data";

interface IProps {
    classes: any;
    onOpenPlayersList: () => void;
}

const styles = (theme: Theme) => createStyles({
    root: {
        padding: "1em"
    }
});


class FollowupContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public playersInFollowUpList: IPlayer[] = [playersData[Math.floor(Math.random() * 10)], playersData[Math.floor(Math.random() * 10)], playersData[Math.floor(Math.random() * 10)]];
    public render() {
        const {classes} = this.props;
        return (
            <Paper elevation={3}>
                <div className={classes.root}>
                    <div>My Wishlist</div>
                    <div>
                        {this.playersInFollowUpList.map((player: IPlayer, index: number) => {
                            return <div>{player.web_name}</div>
                        })}
                    </div>
                    <Button
                        onClick={this.openSelectPlayer}
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<AddCircleIcon />}
                    >
                        Add player
                    </Button>
                </div>
            </Paper>
        );
    }

    private openSelectPlayer = () => {
        const { onOpenPlayersList } = this.props;
        onOpenPlayersList();
    }
}

export default withStyles(styles)(FollowupContainer)