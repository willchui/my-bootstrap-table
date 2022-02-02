import React from 'react';
import MyBootstrapTable from '@willchui/my-bootstrap-table';
import '@willchui/my-bootstrap-table/dist/index.css';
import tabledata from './sample-data.json';

const App = () => {
  const header = {'datetime': {'title': 'Date', 'width': '200px', 'sortable':true},
                  'userId': {'title': 'User ID', 'width': '80px', 'sortable':false},
                  'id': {'title':'ID', 'width': '60px' , 'sortable':true},
                  'title': {'title':'Description', 'sortable':true}, 
                  'completed': {'title':'Is Complete', 'width': '200px', 'sortable':true}};
  return <MyBootstrapTable classname="m-3" 
      header={header} 
      tabledata={tabledata} 
      paginationsize={5} 
      pagesize={20} 
      /** Please see the https://react-bootstrap.github.io/components/table API for more detials. */
      tableapi={{'bordered': true, 'borderless': false, 'hover': false, 
                 'responsive': true, 'size': 'sm', 'striped': true}}
      /** Please see the https://react-bootstrap.github.io/components/pagination API for more detials. */
      paginationapi={{'size': 'sm', 'bsPrefix': 'pagination justify-content-end'}}>

  </MyBootstrapTable>
}

export default App
