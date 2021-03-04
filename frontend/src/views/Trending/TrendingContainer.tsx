import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";

import {stores} from "../../state";
import TrendingRowContainer from "../../components/Trending/TrendingRowContainer";

interface IProps {
    classes: any
}

const styles = (theme: Theme) => createStyles({
    root: {}
});


class TrendingContainer extends React.Component<IProps & Partial<WithStyles<any>>> {
    public render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <TrendingRowContainer player={stores.dataStore.staticData?.elements[0]!} />
                <TrendingRowContainer player={stores.dataStore.staticData?.elements[1]!} />
                <TrendingRowContainer player={stores.dataStore.staticData?.elements[2]!} />
                <TrendingRowContainer player={stores.dataStore.staticData?.elements[3]!} />
            </div>
        );
    }
}

export default withStyles(styles)(TrendingContainer)