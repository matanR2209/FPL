import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {Button, Divider, List} from "@material-ui/core";
import {IPlayer} from "../types/Player";
import SquadListPlayer from "./SquadListPlayer";
import Paper from "@material-ui/core/Paper/Paper";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        playerListContainer: {
            width: "40%"
        },
        headerContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "1em"

        },
        header: {
            fontWeight: 600,
            fontSize: 24,
            color: "#305cc6",
            display: "flex",
            flexDirection: "column",
            margin: "auto 0",
            marginRight: "2em"
        },
        addPlayerContainer: {

        },
        button: {

        }
    }),
);


interface IProps {
    listHeader: string
    players: IPlayer[]
    onPlayerRemove: (playerId: number) => void;
    openAddPlayersView: () => void;

}

export default function PlayersList(props: IProps) {
    const classes = useStyles();

    const onAddPlayerToSquadClick = () => {
        props.openAddPlayersView()
    };

    return (
        <>
            <Paper elevation={3} className={classes.playerListContainer} >
                <div className={classes.headerContainer}>
                    <div className={classes.header}>{props.listHeader}</div>
                    <div className={classes.addPlayerContainer}>
                        <Button
                            onClick={onAddPlayerToSquadClick}
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<AddIcon />}
                        >
                            Add players
                        </Button>
                    </div>
                </div>
                <List>
                    <Divider component="li" />
                    {props.players.map((player: IPlayer, index: number) => {
                        return <SquadListPlayer onPlayerRemove={props.onPlayerRemove} player={player} key={index}/>
                    })}
                </List>
            </Paper>
        </>
    );
}
