import * as React from "react";
import {createStyles, Theme} from "@material-ui/core";
import PlayerCard from "../../components/PlayerCard";
import {makeStyles} from "@material-ui/core/styles";
import {IPlayer} from "../../types/IPlayer";

interface IProps {
    playersInSection: IPlayer[],
    title: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            container: {
                width: "100%",
                display: "flex",
                justifyContent: "space-between"
            },
            trendingSection: {},
            trendingSectionHeader: {
                fontSize: "2em",
                margin: "1em 0"
            },
            trendingListContainer: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }
        }
    ),
);


export default function ReportsSection(props: IProps){
    const classes = useStyles();
    return (
        <div className={classes.trendingSection}>
            <div className={classes.trendingSectionHeader}>{props.title}</div>
            <div className={classes.trendingListContainer}>
                {props.playersInSection.map((player: IPlayer, index: number) => {
                    return <PlayerCard player={player} key={index}/>
                })}
            </div>
        </div>
    )
}