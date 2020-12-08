import * as React from "react";
import {Button, createStyles, Theme} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import {AiOutlineUserAdd, FaDice} from "react-icons/all";
import {makeStyles} from "@material-ui/core/styles";
import {stores} from "../../state";

interface IProps {
    allowRandomSelection?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        addPlayersPaper: {
            width: "auto",
            padding: "1em"
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "center",
            margin: "1em auto",
        }
    }),
);


export default function EmptyListContainer(props: IProps){
    const classes = useStyles();

    const selectRandomPlayers = () => {
        stores.playersStore.generateRandomSquad()
    }


    const openPlayersSelectContainer = () => {
        stores.uiStore.showAddPlayersDialog = true;
    }

    return (
        <div>
            <Paper elevation={3} className={classes.addPlayersPaper} >
                <div>There are no players on your team yet,</div>
                <div>Add players as they appears in your FPL team to track their progress and get analytics</div>
                <div className={classes.buttonContainer}>
                    <Button
                        startIcon={<AiOutlineUserAdd />}
                        onClick={openPlayersSelectContainer}
                        color="secondary">
                        Add players
                    </Button>
                </div>
                {props.allowRandomSelection?<div className={classes.buttonContainer}>
                    <Button
                        startIcon={<FaDice/>}
                        onClick={selectRandomPlayers}
                        color="secondary">
                        Select random
                    </Button>
                </div> : null}
            </Paper>
        </div>
    )
}
