import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DateFormatter from "../helper/DateFormatter";

const basicColumns = [
    {
        id: 'closed',
        label: 'Status',
        minWidth: 100,
        align: 'center',
        format: value => value ? 'Closed' : 'Open',
    },
    {
        id: 'publishedAt',
        label: 'Published At',
        minWidth: 170,
        align: 'center',
        format: value => DateFormatter.getDate(value),
    },
    {
        id: 'lastEditedAt',
        label: 'Last Edited At',
        minWidth: 170,
        align: 'center',
        format: value => DateFormatter.getDate(value),
    },
];

const extendedColumns = basicColumns.concat([
    {
        id: 'closedAt',
        label: 'Closed At',
        minWidth: 170,
        align: 'center',
        format: value => DateFormatter.getDate(value),
    },
]);

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function Issue(props) {
    const { issue } = props;
    const classes = useStyles();

    let columns;

    if (issue.closed) {
        columns = extendedColumns;
    } else {
        columns = basicColumns;
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            {columns.map(column => {
                                const value = issue[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format ? column.format(value) : value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}