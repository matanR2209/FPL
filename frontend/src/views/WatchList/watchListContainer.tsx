import * as React from "react";
import {IPlayer} from "../../types/IPlayer";
import PlayersList from "../../components/PlayersList";
import {HeadCell} from "../../components/SortableTable/types";
import EmptyListContainer from "../EmptyList/EmptyListContainer";

interface IProps {
    watchList: IPlayer[];
}

const HEAD_CELLS: HeadCell[] = [
    { id: 'web_name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'now_cost', numeric: true, disablePadding: true, label: 'Price (M)' },
    { id: 'selected_by_percent', numeric: true, disablePadding: true, label: '% selected by' },
    { id: 'value_season', numeric: true, disablePadding: true, label: 'Value' },
    { id: 'total_points', numeric: true, disablePadding: true, label: 'Total points'},
];

export default function WatchListContainer(props: IProps){
        return props.watchList.length === 0 ? <EmptyListContainer/> : <PlayersList
            showPagination={true}
            headCells={HEAD_CELLS}  players={props.watchList} />;
}