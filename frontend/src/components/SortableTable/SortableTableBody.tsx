import * as React from "react";
import {IPlayer} from "../../types/IPlayer";
import SortableTableRow from "./SortableTableRow";
import TableBody from "@material-ui/core/TableBody";
import {Data, HeadCell, Order} from "./types";

interface IProps {
    order: Order
    orderBy: keyof Data
    items: IPlayer[]
    headers: HeadCell[];
    page?: number
    rowsPerPage?: number

}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export default function SortableTableBody (props: IProps) {
    const {order, orderBy, items, page, rowsPerPage} = props;

    const generateTableRowInfoByHeadCells = (playerInfo: IPlayer) => {
        const dataToPresent: any = {
            code: playerInfo.code,
            id: playerInfo.id
        };
        props.headers.forEach((header: HeadCell) => {
            dataToPresent[header.id] = playerInfo[header.id]
        })
        return dataToPresent
    }

    const renderTableContent = () => {
        if(page !== undefined && rowsPerPage) {
            return stableSort(items, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((playerInfo: IPlayer, index: number) => {
                    return (
                        <SortableTableRow key={index} player={generateTableRowInfoByHeadCells(playerInfo)}/>
                    );
                })
        } else {
            return stableSort(items, getComparator(order, orderBy))
                .map((playerInfo: IPlayer, index: number) => {
                    return (
                        <SortableTableRow key={index} player={generateTableRowInfoByHeadCells(playerInfo)}/>
                    );
                })
        }
    }

    return (
        <TableBody>
            {renderTableContent()}
        </TableBody>
    );
}