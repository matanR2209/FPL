    import * as React from "react";
    import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
    import {createStyles, Select, Theme} from "@material-ui/core";
    import {stores} from "../../state";
    import {observer} from "mobx-react";
    import InputLabel from "@material-ui/core/InputLabel";
    import {ITeam} from "../../types/ITeam";
    import MenuItem from "@material-ui/core/MenuItem";
    import TrendingRowContainer from "../../components/Trending/TrendingRowContainer";
    import PlayersService from "../../services/PlayersService";
    import TrendingAPIService from "../../services/APIServices/TrendingAPIService";
    import TrendingStore from "../../state/stores/TrendingStore";

    interface IProps {
        classes: any
    }

    interface ILocalState {
        selectedTeam: number
    }

    const styles = (theme: Theme) => createStyles({
        root: {}
    });

    @observer
    class TrendingContainer extends React.Component<IProps & Partial<WithStyles<any>>> {

        public state: ILocalState = {
            selectedTeam: 1
        }

        public render() {
            const {classes} = this.props;
            return (
                <div className={classes.root}>
                    {this.renderTeamSelect()}
                    {this.renderPlayersTrending()}
                    <div>TEAMS!</div>
                </div>
            );
        }

        private renderTeamSelect = () => {
            const {classes} = this.props;
            return (
                <div className={classes.teamsContainer}>
                    <InputLabel >Select team</InputLabel>
                    <Select
                        value={this.state.selectedTeam}
                        onChange={this.onSelectedTeamChange}
                    >
                        {this.getTeams()}
                    </Select>
                </div>
            )
        }

        private getTeams = () => {
            return stores.dataStore.staticData?.teams.map((team: ITeam, index: number) => {
                return <MenuItem value={team.id}> {team.name} </MenuItem>
            });
        };


        private onSelectedTeamChange = (newSelectedTeam: any) => {
            this.setState({...this.state, selectedTeam: newSelectedTeam.target.value})
            stores.trendingStore.getTeamTrendingStats(this.state.selectedTeam);
        }

        private renderPlayersTrending = async () => {
            console.log(PlayersService.getPlayersByTeam(this.state.selectedTeam));
            return null;
            // return PlayersService.getPlayersByTeam(this.state.selectedTeam).map(async (player) => {
            //             return <TrendingRowContainer
            //                 player={player}
            //             />
            //                 }
            //             )
            }
    }

    export default withStyles(styles)(TrendingContainer)