import * as React from "react";
import {createStyles, Paper, Theme} from "@material-ui/core";
import {IPlayer} from "../types/IPlayer";
import {makeStyles} from "@material-ui/core/styles";
import {stores} from "../state";

interface IProps {
    player: IPlayer
}
const PLAYER_DIALOG_BG = "https://fantasy.premierleague.com/static/media/eiw-bg-m.6a3a5a31.svg"
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        playerCardContainer: {
            backgroundColor: "#37003c",
            backgroundImage: `url(${PLAYER_DIALOG_BG})`,
            minWidth: "20em",
            padding: ".5em",
            margin: ".2em",
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer"
        },
        statsContainer: {
            color: "white",
            display: "flex",
            flexDirection: "column"
        },
        playerName: {
            fontSize: "1.6em"
        },
        playerNumber: {
            marginTop: "auto",
            color: "#ff2882",
            fontSize: "3em"
        },
    }),
);

export default function PlayerCard(props: IProps){
    const classes = useStyles();
    const { player } = props;
    const openPlayerModal = () => {
        stores.selectedPlayerStore.setSelectedPlayer(player.id)
    }
    return (
        <Paper elevation={3} className={classes.playerCardContainer} onClick={openPlayerModal}>
            <div className={classes.statsContainer}>
                <div className={classes.playerName}>{player.web_name}</div>
                <div>Team {player.team}</div>
                <div className={classes.playerNumber}>{player.squad_number || "10"}</div>
            </div>
            <div>
                <img alt={player.web_name} style={{height: "9em"}} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}/>
            </div>
        </Paper>
    );
}
