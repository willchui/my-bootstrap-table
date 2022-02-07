import React, { useState } from 'react';
import MyBootstrapTable from '@willchui/my-bootstrap-table';
import '@willchui/my-bootstrap-table/dist/index.css';
import tabledata_fromjson from './sample-data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const App = () => {
  const [showResults, setshowResults] = useState("");
  const [tabledata, settableData] = useState(tabledata_fromjson);
  const [selectedRows, setSelectedRows] = useState([]);

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
    setSelectedRows(data);
  };

  const deleteRow = (e)=>{
    selectedRows.forEach((d)=>{      
      tabledata[d] = null;
    });
    const newArr = tabledata.filter((a) => a);
    settableData([...newArr]);
    setSelectedRows([]);
    setshowResults("");
  };
  const header = {'datetime': {'title': 'Date', 'width': '200px', 'sortable':true, 'hide': false},
                  'userId': {'title': 'User ID', 'width': '80px', 'sortable':false, 'hide': true},
                  'id': {'title':'ID', 'width': '60px', 'sortable':true},
                  'title': {'title':'Description', 'sortable':true}, 
                  'completed': {'title':'Complete', 'width': '200px', 'sortable':true}};
  return <Container>

  <Row>
    <label className={"text-nowrap"}>(Your selected rows): </label>
    <textarea className={""} id="w3review" name="w3review" rows="2" cols="50" value={showResults}>
    </textarea>
    <Button style={{width: "100px"}} onClick={deleteRow} disabled={!(selectedRows.length>0)}>Delete</Button>
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
