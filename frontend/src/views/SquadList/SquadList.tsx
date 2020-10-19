import * as React from 'react';
import SquadListPlayer from "../../components/SquadListPlayer";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {IPlayer} from "../../types/Player";
import { Divider, List} from "@material-ui/core";;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
    }),
);
interface IProps {
    squad: IPlayer[]
    onPlayerRemove: (playerId: number) => void;

}

export default function SquadList(props: IProps) {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            <Divider variant="inset" component="li" />
            {props.squad.map((player: IPlayer, index: number) => {
                   return <SquadListPlayer onPlayerRemove={props.onPlayerRemove} player={player} key={index}/>
            })}
        </List>
    );
}
