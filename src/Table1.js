import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import './css/Table.css'
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

export default props => (
  <table className={table}>
  <thead>
    <tr>
      <th>ID</th>
      <th>First</th>
      <th>Last</th>
      <th>Position</th>
    </tr>
</thead>
  <tbody>
  </tbody>
  </table>
)

class Table1 extends Component {
    render(){
        return(
          <div>
          
          </div>
          //   <div>
          //   <BootstrapTable data={this.props.data}>
          //   <TableHeaderColumn isKey dataField='id'>
          //     ID
          //   </TableHeaderColumn>
          //   <TableHeaderColumn dataField='name'>
          //     Name
          //   </TableHeaderColumn>
          //   <TableHeaderColumn dataField='lastname'>
          //     LastName
          //   </TableHeaderColumn>
          //   <TableHeaderColumn dataField='position'>
          //     Position
          //   </TableHeaderColumn>
          // </BootstrapTable>
          //   </div>
        );
    }
}