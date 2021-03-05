import * as React from "react";
import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { Chart } from "react-google-charts";

interface IProps {
    trendingStats: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}
    ),
);


export default function TrendingGraph(props: IProps){
    const classes = useStyles();
    const {trendingStats} = props

    return (
        <Chart
            width={'600px'}
            height={'200px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={trendingStats}
            options={{
                hAxis: {
                    title: 'Time',
                },
                legend: { position: 'bottom', alignment: 'center' },
                series: { 0: { type: 'area' } }
            }}
            rootProps={{ 'data-testid': '2' }}
        />

        )
}