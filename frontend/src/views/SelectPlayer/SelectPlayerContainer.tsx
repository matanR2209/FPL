import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Dialog, Theme} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import {IPlayer, PlayerPosition} from "../../types/IPlayer";
import {ITeam} from "../../types/ITeam";
import {playersData} from "../../dummy_data/players_dummy_data";
import {teamsData} from "../../dummy_data/teams_dummy_data";
import {GroupList} from "../../types/Components";
import SelectGrouping from "../../components/SelectGrouping";
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInputWithIcon from "../../components/OutlinedInputIcon";
import PlayersList from "../../components/PlayersList";
import {HeadCell} from "../../components/SortableTable/types";

interface IProps {
    classes: any
    isOpen: boolean;
    closeSelectPlayerWindow: () => void;
    numberOfPlayersAllowedToAdd?: number;
    addPlayers: (selectedPlayers: IPlayer[]) => void;
    listToAddTo: string;
}

interface ILocalState {
    playersList: IPlayer[];
    selectedFilter: string ;

    playersToAddList: IPlayer[];
    teams: ITeam[];
}

const HEAD_CELLS: HeadCell[] = [
    { id: 'web_name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'now_cost', numeric: true, disablePadding: true, label: 'Price (M)' },
    { id: 'selected_by_percent', numeric: true, disablePadding: true, label: '% selected by' }
];

const styles = (theme: Theme) => createStyles({
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
    },
    filterBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputContainer: {
        width: "40%"
    },
    tableContainer: {
        marginTop: "1em"
    }
});


class SelectPlayerContainer extends React.Component<
    IProps & Partial<WithStyles<any>>,
    ILocalState
    > {

    public state: ILocalState = {
        playersList: playersData,
        selectedFilter: PlayerPosition[PlayerPosition.Goalkeeper],
        playersToAddList: [],
        teams: teamsData
    }

    public render() {
        return (
            <Dialog style={{height: "80%"}}  open={this.props.isOpen} fullWidth={true}>
                <DialogTitle>
                    <div>Player Selection</div>
                </DialogTitle>
                <DialogContent dividers>
                    {this.renderFiltersSection()}
                    {this.renderPlayersList()}
                </DialogContent>
                <DialogActions>
                    {this.renderDialogActions()}
                </DialogActions>
            </Dialog>
        );
    }

    private renderFiltersSection = () => {
        const { classes } = this.props;
        return (
            <div className={classes.filterBar}>
                <div className={classes.inputContainer}>
                    <SelectGrouping
                        onItemSelected={this.onFilterSelected}
                        items={this.generateSelectItems()} label={"View By"} selectedValue={this.state.selectedFilter}/>
                </div>
                <div className={classes.inputContainer}>
                    <OutlinedInputWithIcon onSearchChange={this.onSearchChange} label={"Search by name"} icon={<SearchIcon />}/>
                </div>
            </div>
        )
    }

    private renderPlayersList = () => {
        const { classes } = this.props;
        return (
            <div className={classes.tableContainer}>
                <PlayersList
                    showPagination={true}
                    headCells={HEAD_CELLS}
                    players={this.state.playersList} />
            </div>
        )
    }

    private renderDialogActions = () => {
        return (
            <>
                <Button onClick={this.props.closeSelectPlayerWindow} color="primary">
                    Close
                </Button>
            </>
        )
    }

    private onFilterSelected = (selectedFilter: string) => {
        const newState = this.state;
        newState.selectedFilter = selectedFilter;
        newState.playersList = this.filterPlayersList(selectedFilter);
        this.setState(newState);

    }

    private filterPlayersList = (selectedFilter: string) => {
        if (Object.values(PlayerPosition).includes(selectedFilter))  {
            return playersData.filter((player: IPlayer, index: number) => {
                return player.element_type === parseInt(PlayerPosition[selectedFilter as any])
            })
        } else {
            return playersData.filter((player: IPlayer, index: number) => {
                return player.team === parseInt(selectedFilter)
            })
        }
    }

    private onSearchChange = (value: string) => {
        const filtered = playersData.filter((player: IPlayer) => {
            return player.web_name.toLowerCase().includes(value.toLowerCase())
        })
        const newState = this.state;
        newState.playersList = filtered;
        this.setState(newState);
    }


    private generateSelectItems = (): GroupList[] => {
        const teamsGroup:GroupList = {title: "By team",
            items: Array.from(new Set(playersData.map((player: IPlayer) => {return player.team.toString()})))}
        const positionsGroup:GroupList = {title: "By position",
            items: Array.from(new Set(playersData.map((player: IPlayer) => {return PlayerPosition[player.element_type]})))}
        return [
            positionsGroup,
            teamsGroup
        ]
    }
}

export default withStyles(styles)(SelectPlayerContainer)