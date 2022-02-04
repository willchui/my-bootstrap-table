import React from 'react';
import MyBootstrapTable from '@willchui/my-bootstrap-table';
import '@willchui/my-bootstrap-table/dist/index.css';
import tabledata from './sample-data.json';

const App = () => {
  const header = {'datetime': {'title': 'Date', 'width': '200px', 'sortable':true, 'hide': false},
                  'userId': {'title': 'User ID', 'width': '80px', 'sortable':false, 'hide': true},
                  'id': {'title':'ID', 'width': '60px', 'sortable':true},
                  'title': {'title':'Description', 'sortable':true}, 
                  'completed': {'title':'Complete', 'width': '200px', 'sortable':true}};
  return <MyBootstrapTable classname="m-3" 
      header={header} 
      tabledata={tabledata} 
      paginationsize={5} 
      pagesize={20} 
      /** Please see the https://react-bootstrap.github.io/components/table API for more detials. */
      tableapi={{'bordered': true, 'borderless': false, 'hover': false, 
                 'responsive': true, 'size': 'sm', 'striped': true}}
      /** Please see the https://react-bootstrap.github.io/components/pagination API for more detials. */
      paginationapi={{'size': 'sm', 'bsPrefix': 'pagination justify-content-end'}}
      rowselectapi={{'enable':true}}>

  </MyBootstrapTable>
}

export default App
