import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItemPlayer from "../../components/ListItemPlayer";
import {IPlayer} from "../../types/Player";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            textAlign: "center"
        }
    }),
);
interface IProps {
    squad: IPlayer[]
}

export default function SquadList(props: IProps) {
    const classes = useStyles();
    return (
        <div>
            {props.squad.map((player: IPlayer, index: number) => {
               return <ListItemPlayer player={player} key={index}/>
            })}
        </div>
    );
}