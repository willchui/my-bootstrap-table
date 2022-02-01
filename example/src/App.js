import React from 'react';
import MyBootstrapTable from '@willchui/my-bootstrap-table';
import '@willchui/my-bootstrap-table/dist/index.css';
import tabledata from './sample-data.json';

const App = () => {
  const header = {'userId': {'title': 'User ID', 'width': '80px'},
                  'id': {'title':'ID', 'width': '60px'},
                  'title': {'title':'Description'}, 
                  'completed': {'title':'Is Complete', 'width': '200px'}};
  return <MyBootstrapTable className="m-3"  header={header} tabledata={tabledata} pagesize={20} ></MyBootstrapTable>
}

export default App
