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

const tooltips = {
    cold: "Player form is less than 1.5",
    hot: "Player is on form (higher than 3.5)",
    eyeOn: "Player is transferred in massively for upcoming fixture",
    hazard: "Player will likely to miss the upcoming fixture",
    fyi: "TODO"
}


export default function LabelComponent(props: IProps){
    const classes = useStyles();
    const {labelType} = props;

    const coldLabel = <div className={`${classes.label} ${classes.cold}`}>
        <div>❄️ Brrrrrr</div>
        <div className={classes.infoContainer}>
                <ReactTooltip
                    place={"top"}
                    effect={"solid"}
                    html={true}
                />
                <div data-tip={tooltips.cold}>
                        <span>ℹ️</span>
                </div>
        </div> ️

    </div>;

    const hotLabel = <div className={`${classes.label} ${classes.hot}`}>
        <div>🔥 HOT!!!</div>
        <div className={classes.infoContainer}>
            <ReactTooltip
                place={"top"}
                effect={"solid"}
                html={true}
            />
            <div data-tip={tooltips.hot}>
                <span>ℹ️</span>
            </div>
        </div>
    </div>;

    const greyLabel = <div className={`${classes.label} ${classes.grey}`}>
        <div>👁 FYI</div>
        <div className={classes.infoContainer}>
            <ReactTooltip
                place={"top"}
                effect={"solid"}
                html={true}
            />
            <div data-tip={tooltips.fyi}>
                <span>ℹ️</span>
            </div>
        </div>
    </div>;

    const warningLabel = <div className={`${classes.label} ${classes.warning}`}>
        <div>☢️ Hazard</div>
        <div className={classes.infoContainer}>
            <ReactTooltip
                place={"top"}
                effect={"solid"}
                html={true}
            />
            <div data-tip={tooltips.hazard}>
                <span>ℹ️</span>
            </div>
        </div> ️
    </div>;

    const OneToWatchLabel = <div className={`${classes.label} ${classes.oneToWatch}`}>
        <div>🎯 Eye on </div>
        <div className={classes.infoContainer}>
            <ReactTooltip
                place={"top"}
                effect={"solid"}
                html={true}
            />
            <div data-tip={tooltips.eyeOn}>
                <span>ℹ️</span>
            </div>
        </div> ️
    </div>

    switch (labelType) {
        case LabelTypes.Cold: return coldLabel;
        case LabelTypes.Hot: return hotLabel;
        case LabelTypes.grey: return greyLabel;
        case LabelTypes.warning: return warningLabel;
        case LabelTypes.OneToWatch: return OneToWatchLabel;

    }
}