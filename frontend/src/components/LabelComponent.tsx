import {createStyles, Theme} from "@material-ui/core";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {LabelTypes} from "../types/IPlayer";
import ReactTooltip from 'react-tooltip';

interface IProps {
    labelType: LabelTypes
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            fontSize: 12,
            borderRadius: 5,
            fontWeight: 600,
            minWidth: "10em",
            padding: ".3em .8em",
            margin: ".5em",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row"
        },
        infoContainer: {
            marginLeft: "auto"
        },
        cold: {
            backgroundColor: "#246BB6",
            color: "white"
        },
        hot: {
            background: "#FEEEEE",
            color: "#F78182"
        },
        grey: {
            background: "#F3F3F3",
            color: "#2F3033"
        },
        warning: {
            background: "#FDEFC5",
            color: "#BF8A00"
        },
        oneToWatch: {
            background: "#B5F5D1",
            color: "#479F5B"
        },
    })
);


export default function LabelComponent(props: IProps){
    const classes = useStyles();
    const {labelType} = props;

    const coldLabel = <div className={`${classes.label} ${classes.cold}`}>
        <div>❄️ Brrrrrr</div>
        <div className={classes.infoContainer}>ℹ️</div> ️

    </div>;

    const hotLabel = <div className={`${classes.label} ${classes.hot}`}>
        <div>🔥 HOT!!!</div> ️
        <div className={classes.infoContainer}>ℹ️</div> ️
    </div>;

    const greyLabel = <div className={`${classes.label} ${classes.grey}`}>
        <div>👁 FYI</div>
        <div className={classes.infoContainer}>ℹ️</div> ️
    </div>;
    const warningLabel = <div className={`${classes.label} ${classes.warning}`}>
        <div>☢️ Hazard</div>
        <div className={classes.infoContainer}>ℹ️</div> ️
    </div>;

    const OneToWatchLabel = <div className={`${classes.label} ${classes.oneToWatch}`}>
        <div>🎯 Eye on </div>
        <div className={classes.infoContainer}>ℹ️</div> ️
    </div>

    switch (labelType) {
        case LabelTypes.Cold: return coldLabel;
        case LabelTypes.Hot: return hotLabel;
        case LabelTypes.grey: return greyLabel;
        case LabelTypes.warning: return warningLabel;
        case LabelTypes.OneToWatch: return OneToWatchLabel;

    }
}