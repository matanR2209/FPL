import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {IPlayer} from "../types/Player";
import {Avatar, Button, Divider, List, ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        playerContainer: {

        },
        avatarContainer: {
            margin: "auto"
        },
        inline: {
            display: 'inline',
        },
        playerActions: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        button: {
            margin: ".5em"
        }
    }),
);
interface IProps {
    player: IPlayer
    onPlayerRemove: (playerId: number) => void;
}

export default function SquadListPlayer(props: IProps) {
    const classes = useStyles();
    const showPlayerInfo = () => {
        alert(`Show info for player: ${props.player.web_name}`);
    }
    const removePlayer = () => {
        props.onPlayerRemove(props.player.id);
    }
    return (
        <>
            <ListItem className={classes.playerContainer}>
                <div className={classes.playerActions}>
                    <Button
                        onClick={showPlayerInfo}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<InfoIcon />}
                    >View info</Button>
                    <Button
                        onClick={removePlayer}
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<RemoveCircleIcon />}
                    >Remove player</Button>
                </div>
                <ListItemAvatar className={classes.avatarContainer}>
                    <div><Avatar alt={props.player.web_name} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${props.player.code}.png`} /></div>
                </ListItemAvatar>
                <ListItemText
                    primary={props.player.web_name}
                    secondary={
                        <>
                            <div>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {`Team ID: ${props.player.team}`}
                                </Typography>
                            </div>
                            <div>Total points: {props.player.total_points}</div>
                        </>
                    }
                />
            </ListItem>
            <Divider component="li" />
        </>
    );
}