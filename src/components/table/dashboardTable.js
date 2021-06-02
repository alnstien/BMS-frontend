import React from 'react'
import './dashboardTable.css'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import {FiSkipForward,FiSkipBack} from 'react-icons/fi'
import {GrNext,GrPrevious} from 'react-icons/gr'

const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  
  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <FiSkipForward size={22} /> :<FiSkipBack size={22} />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ?<GrNext size={20} color={"lightgray"} />: <GrPrevious size={19} color={"lightgray"} /> }
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <GrPrevious size={19} color={"lightgray"}  /> : <GrNext size={20}  color={"lightgray"} />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FiSkipBack size={22} /> : <FiSkipForward size={22} />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  function createData(name, type, date) {
    return { name, type, date };
  }
  
  const rows = [
    createData('John Doe', "Barangay Clearance", "May 12, 2019"),
    createData('Al Ares', "Barangay Clearance", "May 12, 2019"),
    createData('Johnsen Daxy', "Barangay Clearance", "May 12, 2019"),
    createData('Ricardo Dalisay', "Barangay Clearance", "May 12, 2019"),
    createData('Juan dela Cruz', "Barangay Clearance", "May 12, 2019"),
    createData('John Doe', "Barangay Clearance", "May 12, 2019"),
    createData('John Doe', "Barangay Clearance", "May 12, 2019"),
    createData('John Doe', "Barangay Clearance", "May 12, 2019"),
    createData('John Doe', "Barangay Clearance", "May 12, 2019"),
  ].sort((a, b) => (a.calories < b.calories ? -1 : 1));
  
  const useStyles2 = makeStyles({
    table: {
      minWidth: 500,
    },
  });



export default function DTable({title}) {

const classes = useStyles2();
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5);

const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    return (
        <div className="d-table-wrapper">
            <div className="d-table-wrapper-header">
              <h2>{title}</h2>
            </div>
   <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" style={{ width: 160 }}>
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.type}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.date}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </div>
    )
}
