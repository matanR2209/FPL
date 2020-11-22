import * as React from "react";
import {IPlayer} from "../../types/IPlayer";
import PlayersList from "../../components/PlayersList";
import {observer} from "mobx-react";
import {HeadCell} from "../../components/SortableTable/types";

interface IProps {
    watchList: IPlayer[];
    onAddPlayerClicked: (listToAddPlayersTo: string) => void;
}

const HEAD_CELLS: HeadCell[] = [
    { id: 'web_name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'now_cost', numeric: true, disablePadding: true, label: 'Price (M)' },
    { id: 'selected_by_percent', numeric: true, disablePadding: true, label: '% selected by' },
    { id: 'value_season', numeric: true, disablePadding: true, label: 'Value' },
    { id: 'total_points', numeric: true, disablePadding: true, label: 'Total points'},
];

@observer
export default class WatchListContainer extends React.Component<IProps> {
    public render() {
        return (<PlayersList
            showPagination={true}
            headCells={HEAD_CELLS}  players={this.props.watchList} />);
    }
}