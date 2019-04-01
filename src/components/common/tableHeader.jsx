import React, { Component } from 'react';
//need columns :array , sortColum : obj 
//onSort Function
class TableHeader extends Component {
    raiseSort = (path) =>{
        const sortColumn = this.props.sortColumn
        if(sortColumn.path===path) {
          sortColumn.order =sortColumn.order==='asc' ? 'desc' : 'asc'
        }
        else {
          sortColumn.path = path
          sortColumn.order = 'asc'
        }
        this.props.onSort(sortColumn)
      }
    render() { 
        return ( <thead>
            <tr>
                {this.props.columns.map(column => <th key={column.path ? column.path : column.key} onClick={()=> this.raiseSort(column.path)}> {column.label}</th>)}
            </tr>
        </thead> );
    }
}
 
export default TableHeader;