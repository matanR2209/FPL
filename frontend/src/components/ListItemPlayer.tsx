import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {IPlayer} from "../types/Player";
import {useState} from "react";
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            textAlign: "center"
        }
    }),
);
interface IProps {
    player: IPlayer
}

export default function ListItemPlayer(props: IProps) {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        console.log(props.player);
        setIsOpen(!isOpen);
    }

    const renderCollapse = () => {
        return (
            <Collapse
                in={isOpen}
                timeout="auto"
                unmountOnExit={true}
                key={`${props.player.web_name}-collapse`}
            >
                    INFO
            </Collapse>
        );
    }

    return (
        <>
            <ListItem
                key={props.player.web_name}
                button={true}
                divider={true}
                onClick={toggleOpen}
                className={classes.listItem}
            >
                <ListItemText primary={props.player.web_name} secondary={props.player.web_name} />
            </ListItem>
            {renderCollapse()}
        </>
    );
}