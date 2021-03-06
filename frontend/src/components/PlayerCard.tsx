import * as React from "react";
import {Card, createStyles, Theme} from "@material-ui/core";
import {IPlayer, LabelTypes} from "../types/IPlayer";
import {makeStyles} from "@material-ui/core/styles";
import {stores} from "../state";
import LabelComponent from "./LabelComponent";

interface IProps {
    player: IPlayer
}
const PLAYER_DIALOG_BG = "https://fantasy.premierleague.com/static/media/eiw-bg-m.6a3a5a31.svg"
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardContainer: {
            backgroundColor: "#37003c",
            backgroundImage: `url(${PLAYER_DIALOG_BG})`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "1.5em 1em",
            margin: ".4em 0",
            cursor: "pointer",
            borderRadius: 5,
            maxHeight: "12em",
            width: "30em"
        },
        playerName: {
            color: "#FFFFFF",
            fontSize: "1.6em"
        },
        playerTeam: {
            fontSize: "1em",
            color: "#FFFFFF"
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

    const getPlayerLabels = () => {
     return (
         <div>
             <LabelComponent labelType={LabelTypes.grey}/>
             {player.chance_of_playing_this_round === 0? <LabelComponent labelType={LabelTypes.warning}/> : null}
             {parseFloat(player.form) < 1.5? <LabelComponent labelType={LabelTypes.Cold}/> : null}
             {player.transfers_in_event > 50000? <LabelComponent labelType={LabelTypes.OneToWatch}/> : null}
             {parseFloat(player.form) > 3.5? <LabelComponent labelType={LabelTypes.Hot}/> : null}
         </div>
     )
    }

    return (
            <Card
                className={classes!.cardContainer}
                onClick={openPlayerModal}
            >
                <div>
                    <img alt={player.web_name} style={{height: "9em"}} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`}/>
                </div>
                <div>
                    <div className={classes!.playerName}>{player.web_name}</div>
                    <div className={classes!.playerTeam}>{`Team ${player.team}`}</div>
                    <div className={classes.playerNumber}>{player.squad_number || "10"}</div>
                </div>
                {getPlayerLabels()}
            </Card>
    );
}
