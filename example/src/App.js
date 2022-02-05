import React, { useState } from 'react';
import MyBootstrapTable from '@willchui/my-bootstrap-table';
import '@willchui/my-bootstrap-table/dist/index.css';
import tabledata from './sample-data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  const [showResults, setshowResults] = useState("");

  /** 
   * It will retrieve the selected rows number from the MyBootstrapTable component.
   * @param {number[])} the selected rows number - index number on tabledata.
   */
  const callbackRowSelect = (data)=>{
    let results = "";
    data.forEach((d)=>{
         results += `${tabledata[d].id}, `;
    });
    setshowResults(results);
  };
  const header = {'datetime': {'title': 'Date', 'width': '200px', 'sortable':true, 'hide': false},
                  'userId': {'title': 'User ID', 'width': '80px', 'sortable':false, 'hide': true},
                  'id': {'title':'ID', 'width': '60px', 'sortable':true},
                  'title': {'title':'Description', 'sortable':true}, 
                  'completed': {'title':'Complete', 'width': '200px', 'sortable':true}};
  return <Container>

  <Row>
  <div className={"d-flex"}>
    <label>(Your selected rows): </label>
    <textarea id="w3review" name="w3review" rows="2" cols="100" value={showResults}>
    </textarea>
  </div>
  </Row>
  <Row>
  <MyBootstrapTable classname="m-3" 
      header={header} 
      tabledata={tabledata} 
      paginationsize={5} 
      pagesize={20} 
      /** Please see the https://react-bootstrap.github.io/components/table API for more detials. */
      tableapi={{'bordered': true, 'borderless': false, 'hover': false, 
                 'responsive': true, 'size': 'sm', 'striped': true}}
      /** Please see the https://react-bootstrap.github.io/components/pagination API for more detials. */
      paginationapi={{'size': 'sm', 'bsPrefix': 'pagination justify-content-end'}}
      rowselectapi={{'enable':true, 'callback': callbackRowSelect}}>

  </MyBootstrapTable>
  </Row>
  </Container>
}

export default App
