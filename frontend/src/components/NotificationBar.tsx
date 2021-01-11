import * as React from "react";
import {createStyles, Snackbar, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {stores} from "../state";
import {observer} from "mobx-react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

    }),
);

@observer
export default class NotificationBar extends React.Component<any>{
    public render() {
        return (
            <Snackbar
                autoHideDuration={5000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(stores.uiStore.notificationMessage)}
                onClose={this.handleClose}
                message={stores.uiStore.notificationMessage}
            />
        );
    }

    private handleClose = () => {
        stores.uiStore.notificationMessage = '';
    }
}
