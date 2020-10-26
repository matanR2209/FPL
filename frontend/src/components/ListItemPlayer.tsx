import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {IPlayer} from "../types/Player";
import {useState} from "react";
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        playerListItemContainer: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
        }
    }),
);
interface IProps {
    player: IPlayer
}

export default function ListItemPlayer(props: IProps) {
    const classes = useStyles();

    return (
        <div className={classes.playerListItemContainer}>
            <ListItem
                key={props.player.web_name}
                button={true}
                divider={true}
            >
                <ListItemText primary={props.player.web_name} secondary={props.player.web_name} />
            </ListItem>
        </div>
    );
}