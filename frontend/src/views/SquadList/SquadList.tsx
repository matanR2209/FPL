import * as React from "react";
import {createStyles, Theme} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import {makeStyles} from "@material-ui/core/styles";
import PlayersList from "../../components/PlayersList";
import {IPlayer, PlayerPositionsByName, PlayerPositionsByValue} from "../../types/IPlayer";
import {HeadCell} from "../../components/SortableTable/types";

interface IProps {
    squad: IPlayer[]
    headCells: HeadCell[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            squadListContainer: {
                border: "1px solid"
            },
            golHeader: {
                padding: ".5em 1em",
                fontWeight: 600,
                backgroundColor: "#ebff00"
            },
            defHeader: {
                padding: ".5em 1em",
                fontWeight: 600,
                backgroundColor: "#00ff87"
            },
            midHeader: {
                padding: ".5em 1em",
                fontWeight: 600,
                backgroundColor: "#05f0ff"
            },
            forHeader: {
                padding: ".5em 1em",
                fontWeight: 600,
                color: "white",
                backgroundColor: "#e90052"
            }
    }
    ),
);

export default function SquadList(props: IProps){
    const classes = useStyles();
    return (
        <Paper elevation={3} >
            <div className={classes.golHeader}>{`${PlayerPositionsByName.Goalkeeper}s`}</div>
            <PlayersList
                showPagination={false}
                players={props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Goalkeeper})} headCells={props.headCells}/>
            <div className={classes.defHeader}>{`${PlayerPositionsByName.Defender}s`}</div>
            <PlayersList
                showPagination={false}
                players={props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Defender})} headCells={props.headCells}/>
            <div className={classes.midHeader}>{`${PlayerPositionsByName.Midilfer}s`}</div>
            <PlayersList
                showPagination={false}
                players={props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Midilfer})} headCells={props.headCells}/>
            <div className={classes.forHeader}>{`${PlayerPositionsByName.Forward}s`}</div>
            <PlayersList
                showPagination={false}
                players={props.squad.filter((player: IPlayer) => {return player.element_type === PlayerPositionsByValue.Forward})} headCells={props.headCells}/>
        </Paper>
    )
}
