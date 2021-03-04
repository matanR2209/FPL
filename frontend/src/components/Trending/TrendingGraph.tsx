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
            data={trendingStats.graphStats}
            options={{
                hAxis: {
                    title: 'Time',
                },
                series: {
                    1: { curveType: 'function' },
                },
                legend: { position: 'bottom', alignment: 'center' }

            }}
            rootProps={{ 'data-testid': '2' }}
        />

        )
}