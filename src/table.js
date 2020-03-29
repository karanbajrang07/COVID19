import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';
const useStyles = makeStyles({
  table: {
   // minWidth: 650,
  },
});

function createData(State, cases, Cured,Deaths) {
  return { State, cases, Cured,Deaths};
}


class Tablee extends Component {
render(){
   const {rows}=this.props
  return (
    <TableContainer className="table-c" component={Paper}>
      <Table className={useStyles.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell >Confirmed Case</TableCell>
            <TableCell>Cured</TableCell>
            <TableCell >Deaths</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.State}</TableCell>
              <TableCell >{row.cases}</TableCell>
              <TableCell >{row.Cured}</TableCell>
              <TableCell >{row.Deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
          }
}
export default Tablee;
