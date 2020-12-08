import * as React from "react";
import {IPlayer} from "../../types/IPlayer";
import {HeadCell} from "../../components/SortableTable/types";
import EmptyListContainer from "../EmptyList/EmptyListContainer";
import SquadList from "./SquadList";


interface IProps {
    squad: IPlayer[]
}

const HEAD_CELLS: HeadCell[] = [
    { id: 'web_name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'now_cost', numeric: true, disablePadding: true, label: 'Price (M)' },
    { id: 'selected_by_percent', numeric: true, disablePadding: true, label: '% selected by' },
    { id: 'value_season', numeric: true, disablePadding: true, label: 'Value' },
    { id: 'total_points', numeric: true, disablePadding: true, label: 'Total points'},
];

export default function SquadListContainer(props: IProps) {
    return props.squad.length === 0 ? <EmptyListContainer allowRandomSelection={true}/> : <SquadList squad={props.squad} headCells={HEAD_CELLS}/>;
}