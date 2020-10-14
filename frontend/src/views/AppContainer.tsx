import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import SquadListContainer from "./SquadList/SquadListContainer";
import FollowupContainer from "./FollowupList/FollowupContainer";
// import SelectPlayerContainer from "./SelectPlayer/SelectPlayerContainer";
import SignUpContainer from "./SignUp/SignUpContainer";
import SignInContainer from "./SignIn/SignInContainer";

interface IProps {
    classes: any
}

interface ILocalState {
    isAddPlayerOpen: boolean;
}

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
});


class AppContainer extends React.Component<
    IProps & Partial<WithStyles<any>>,
    ILocalState
    > {
    public state: ILocalState = {
        isAddPlayerOpen: false
    };

    public render() {
        const { classes } = this.props;
        return (<SignInContainer/>);
    }

    private onOpenPlayersList = () => {
        const newState = this.state;
        newState.isAddPlayerOpen = true;
        this.setState(newState);
        console.log("onAddPlayerClicked")
    }

    private closeSelectPlayer = () => {
        const newState = this.state;
        newState.isAddPlayerOpen = false;
        this.setState(newState);
    }
}

{/*<div className={classes.root}>*/}
{/*    <SquadListContainer/>*/}
{/*    <FollowupContainer onOpenPlayersList={this.onOpenPlayersList}/>*/}
{/*    <SelectPlayerContainer*/}
{/*        closeSelectPlayerWindow={this.closeSelectPlayer}*/}
{/*        isOpen={this.state.isAddPlayerOpen}*/}
{/*    />*/}
{/*</div>*/}

export default withStyles(styles)(AppContainer)