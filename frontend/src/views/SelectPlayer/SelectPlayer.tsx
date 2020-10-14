import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItemPlayer from "../../components/ListItemPlayer";
import {IPlayer} from "../../types/Player";
import {ITeam} from "../../types/Team";
import {Select} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        playersList: {},
        playersToAddList: {

        },
        teamsContainer: {},
        playerContainer: {
            marginBottom: "1em",
            display: "flex",
            justifyContent: "space-between"
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "column",
            margin: "auto"
        }
    }),
);
interface IProps {
    onTeamChange: (teamId: number) => void;
    onPlayerSelect: (playerId: number) => void;
    availablePlayersOnSelectedTeam: IPlayer[];
    playersToAddToWIshList: IPlayer[];
    availableTeams: ITeam[];
}

export default function SelectPlayer(props: IProps) {
    const classes = useStyles();
    const [selectedTeam, setSelectedTeam] = React.useState(0);

    const onSelectedTeamChange = (e: any) => {
        setSelectedTeam(e.target.value);
        props.onTeamChange(e.target.value);
    };

    const onPlayerAdded = (selectedPlayer: IPlayer) => {
        props.onPlayerSelect(selectedPlayer.id)
    };

    const getTeams = () => {
        return props.availableTeams.map((team: ITeam, index: number) => {
            return <MenuItem value={team.id}> {team.name} </MenuItem>
        });
    };

    return (
        <div>
            <div className={classes.teamsContainer}>
                <InputLabel id="team-select">Select team</InputLabel>
                <Select
                    fullWidth={true}
                    labelId="team-select"
                    value={selectedTeam}
                    onChange={onSelectedTeamChange}
                >
                    {getTeams()}
                </Select>
            </div>
            <div className={classes.playersList}>
                {props.availablePlayersOnSelectedTeam.map((player: IPlayer, index: number) => {
                    return <div className={classes.playerContainer}>
                        <ListItemPlayer player={player} key={index}/>
                        <div className={classes.buttonContainer}>
                            <Button
                                onClick={() => onPlayerAdded( player )}
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<PersonAddIcon />}
                            >
                                Add player
                            </Button>
                        </div>
                    </div>
                })}
            </div>
            <div className={classes.playersToAddList}>
                {props.playersToAddToWIshList.map((player: IPlayer, index: number) => {
                    return <div key={index}>{player.web_name}</div>
                })}
            </div>
        </div>
    );
}