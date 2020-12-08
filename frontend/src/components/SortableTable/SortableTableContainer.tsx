import React, {useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import {IPlayer} from "../../types/IPlayer";
import SortableTableHead from "./SortableTableHead";
import {Data, HeadCell, Order} from "./types";
import SortableTableBody from "./SortableTableBody";
import {TablePagination} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
        },
        table: {}
    }),
);

interface playersTableProps {
    playersList: IPlayer[];
    headCells: HeadCell[];
    showPagination: boolean
}

export default function SortableTableContainer(props: playersTableProps) {
    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('web_name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    useEffect(() => {
        if(!props.showPagination) {
            setRowsPerPage(props.playersList.length)
        }
    });

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="enhanced table"
                    >
                        <SortableTableHead
                            onRequestSort={handleRequestSort}
                            order={order}
                            orderBy={orderBy}
                            headCells={props.headCells}
                        />
                        <SortableTableBody
                            rowsPerPage={rowsPerPage}
                            page={page}
                            order={order}
                            orderBy={orderBy}
                            headers={props.headCells}
                            items={props.playersList}/>
                    </Table>
                </TableContainer>
                {props.showPagination?
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={props.playersList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    :   null}
            </div>
        </div>
    );
}