import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(State, cases, Cured,Deaths) {
  return { State, cases, Cured,Deaths};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Tablee extends Component {
state={
    data:[],
    rows:[]
}
componentDidMount() {

    
    fetch('http://covid-cases-india.azurewebsites.net/', {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json'},
      })
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .then(console.log(this.state.data))
    //  .then(response => response.json() , console.log(response))
     
    //   .then(response => {
    //     const { memes } = response.data;
    //     this.setState({
    //       allMemes: memes
    //     });
    //   });
  }

render(){
   
  return (
    <TableContainer component={Paper}>
      <Table className={useStyles.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell align="right">Confirmed Case</TableCell>
            <TableCell align="right">Cured</TableCell>
            <TableCell align="right">Deaths</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.State}</TableCell>
              <TableCell align="right">{row.cases}</TableCell>
              <TableCell align="right">{row.Cured}</TableCell>
              <TableCell align="right">{row.Deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
          }
}
export default Tablee;