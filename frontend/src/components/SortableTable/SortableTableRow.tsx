import * as React from "react";
import {Avatar, createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {IPlayer} from "../../types/IPlayer";
import {ImInfo} from "react-icons/all";
import {stores} from "../../state";
interface IProps {
    player: IPlayer
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatarContainer: {
            display: "flex"
        },
        name: {
            display: "flex",
            margin: "auto",
            marginLeft: ".5em"
        },
        iconContainer: {
            cursor: "pointer"
        }
    }),
);
export default function SortableTableRow (props: IProps) {
    const classes = useStyles();
    const { player } = props;

    const onPlayerInfoClick = () => {
        stores.selectedPlayerStore.setSelectedPlayer(player.id);
    }

    return (
        <TableRow
            hover
            role="checkbox"
            tabIndex={-1}
            key={player.web_name}
        >

            <TableCell>
                <div onClick={onPlayerInfoClick} className={classes.iconContainer}><ImInfo /></div>
            </TableCell>
            <TableCell component="th" scope="row" padding="none">
                <div  className={classes.avatarContainer}>
                    <Avatar alt={player.web_name} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${player.code}.png`} />
                    <div  className={classes.name}>{player.web_name}</div>
                </div>
            </TableCell>
            {player.now_cost ? <TableCell align="right">{player.now_cost / 10}</TableCell> : null}
            {player.value_season ? <TableCell align="right">{player.value_season}</TableCell> : null}
            {player.selected_by_percent ? <TableCell align="right">{player.selected_by_percent}</TableCell> : null}
            {player.total_points !== undefined ? <TableCell align="right">{player.total_points}</TableCell> : null}
        </TableRow>
    );
}