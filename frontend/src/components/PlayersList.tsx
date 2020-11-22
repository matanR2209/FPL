import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {IPlayer} from "../types/IPlayer";
import SortableTable from "./SortableTable/SortableTableContainer";
import {HeadCell} from "./SortableTable/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        playerListContainer: {

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
        rowHeader: {
            background: "#efefef",
            fontWeight: 600,
            padding: "1em 3em"
        }
    }),
);

interface IProps {
    players: IPlayer[]
    headCells: HeadCell[]
    showPagination: boolean

}
export default function PlayersList(props: IProps) {
    const classes = useStyles();


    return (
        <>
            <div className={classes.playerListContainer} >
                <SortableTable showPagination={props.showPagination} headCells={props.headCells} playersList={props.players}/>
            </div>
        </>
    );
}
