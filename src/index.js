/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { Table, Pagination} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import PropTypes, { bool, object } from 'prop-types';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CaretUpFill, CaretDownFill } from 'react-bootstrap-icons';
import style from './styles.module.css';

/**
 * Component for using bootstrap table and combine bootstrap pagination.
 *
 * @component
 * @example
 * const className = "m-3";
 * const header = {'id_key': 'ID (Title)', 'username_key': 'Name (Title)'};
 * const tabledata = [{'id_key': 123, 'username_key': 'Jimmy'}];
 * const pagesize = 20;
 * const paginationsize = 5;
 * const tableapi={'bordered': true, 'borderless': false, 'hover': false, 'responsive': true, 'size': 'sm', 'striped': true};
 * const paginationapi={'size': 'sm', 'bsPrefix': 'pagination justify-content-end'};
 * const rowselectapi={'enable': true, 'rowselected': callback_function};
 * return (
 *   <MyBootstrapTable header={header} tabledata={tabledata} pagesize={pagesize} paginationsize={paginationsize} />
 * )
 */
const MyBootstrapTable = ({classname, header, tabledata, pagesize=0, paginationsize=5, 
  paginationapi={}, tableapi={}, rowselectapi={}}) =>{
  
  const [paginationItems, setPaginationItems] = useState([]);
  const [currentPage, setCurrentPage]= useState(0);
  const [showPagination, setShowPagination] = useState(true);

  const [tableDataUI, setTableDataUI] = useState([]);
  
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const [currentSortID, setcurrentSortID] = useState("");
  const [isDesc, setDesc] = useState(false);
  const [rowSelected, setRowSelected] = useState([]);
  const [rowSelectedAll, setRowSelectedAll] = useState(false);

  const myTableData = useRef([]);
  
  /**
   * To implement pagination, and load the data in chucks.
   * @param {number} activePage The current active page number from pagination bar.
   */
  const showDataPage = (activePage) =>{
     /**
     * To find out a chunk of current page data, or assign the data into table 
     * directly if the prop.pagesize is 0.
     */

    const offset = activePage * pagesize;
    const table = (pagesize === 0) ? myTableData.current : myTableData.current.slice(offset).slice(0, pagesize);
    
    const totalPages = Math.ceil(myTableData.current.length / pagesize)|0;
    setTableDataUI(table);
    setShowPagination((totalPages > 1));  

    if(totalPages === 1)
        return;

    /**
     * Create pagination buttons and the button of prev and last.
     */
    const paginationOffset = Math.floor(activePage/paginationsize);
    let paginationBtns = [...Array.from(Array(paginationsize), (x,i)=>i)].map(x=>((x+1+(paginationOffset * paginationsize))));
    paginationBtns = paginationBtns.filter((x)=> {return x<=totalPages;});
    const firstItem = paginationBtns[0];
    const lastItem = paginationBtns.slice(-1)[0];
    setShowPrev((firstItem !== 1));
    setShowNext((lastItem<totalPages));
    setPaginationItems(paginationBtns);                

  }
  const paginationClick = (e) =>{
    if(e.target.text === undefined)
        return;
    const num = parseInt(e.target.text)-1;
    setCurrentPage(num);
    showDataPage(num);
  }
  const paginationNext = (e) =>{
    const next = (Math.floor(currentPage/paginationsize) + 1) * paginationsize;        
    setCurrentPage(next);
    showDataPage(next);
  }
  const paginationPrev = (e) =>{
    const prev = ((Math.floor(currentPage/paginationsize) + 1) * paginationsize) - paginationsize - 1;
    setCurrentPage(prev);
    showDataPage(prev);
  }
  
  const sortHandle = (e) =>{
    const key = e.target.dataset.id;
    if(key === undefined)
       return;

    setcurrentSortID(key);
    myTableData.current.sort((myF, myS) =>{
      /** Find out item type DateTime, String or number. */        
      const f = myF[Object.keys(myF)[0]];
      const s = myS[Object.keys(myS)[0]];
      const test = f[key].toString();
      if(isNaN(test)) {
        const isNotDate = isNaN(Date.parse(test));
        if(isNotDate) {
          const first = f[key].toString().toUpperCase(); 
          const second = s[key].toString().toUpperCase();
          if (first < second) {
            return isDesc?-1:1;
          }
          if (first > second) {
            return isDesc?1:-1;
          }          
          return 0;
        }
        else {
          /** Date sort. */
          const firstDate = new Date(f[key].toString()).getTime();
          const secondDate = new Date(s[key].toString()).getTime();
          return firstDate > secondDate ? (isDesc?1:-1) : (isDesc?-1:1); 
        }
      }
      else {
        return  isDesc?(f[key]-s[key]):(s[key]-f[key]);
      }
    });
    setDesc(!isDesc);
    showDataPage(currentPage);
  }

  const selectAll = (e) =>{
    let results;
    if(!e.target.checked) {
      results = [];
    }
    else {
      results = [...myTableData.current.map((d)=>(Object.keys(d)[0]))];
    }
    setRowSelectedAll(e.target.checked);
    setRowSelected(results); 
    if(rowselectapi.callback) {
      rowselectapi.callback(results);
    }
  }

  const selectRow = (e) =>{
    const key = e.target.dataset.id;
   
    if(!e.target.checked) {
      const index = rowSelected.indexOf(key);
      if (index > -1) {
        rowSelected.splice(index, 1); 
      }
    }
    else {
      rowSelected.push(key);
    }
    setRowSelected([...rowSelected]);
    if(rowselectapi.callback) {
      rowselectapi.callback(rowSelected);
    }
  }
  
  useEffect(() => {
    /** Convert tabledata to myTableData
     */
    myTableData.current = tabledata.map((data, i)=>{        
      const item = {};
      item[i] = data;
      return item;
    });
    setRowSelected([]);
    setRowSelectedAll(false);
    showDataPage(currentPage);
  }, [tabledata])

  return (
    <div className={classname}>
      <Table responsive={tableapi.responsive|false} 
             striped={tableapi.striped|false}  
             bordered={tableapi.bordered|false}
             hover={tableapi.hover|false} 
             size={tableapi.size?tableapi.size:'sm'}
             variant={tableapi.variant?tableapi.variant:''}
             bsPrefix={tableapi.bsPrefix?tableapi.bsPrefix:'table'}>
          {
            header?
              <thead>
                  <tr>                 
                  {rowselectapi.enable?<th className={'text-center'}>
                    <Form.Check type="checkbox" checked={rowSelectedAll} onChange={selectAll}></Form.Check>
                    </th>:''}    
                  {                                      
                      Object.keys(header).map((k, index)=>(                          
                            header[k].hide?'':
                            <th className="text-nowrap" key={index} width={header[k].width?header[k].width:'auto'}>
                              {
                              header[k].sortable?                              
                              <div onClick={sortHandle} data-id={k} className={style.header_sort_control}>
                                  {header[k].title}
                                  {                                     
                                    (currentSortID !== k)?'' : 
                                    (!isDesc?<CaretUpFill className="ms-2" size={12} /> :
                                     <CaretDownFill className="ms-2" size={12} />)
                                  }
                              </div>
                              : header[k].title
                              }
                            </th>
                      ))
                  }
                  </tr>
              </thead>
            :''
          } 
          <tbody> {
              tableDataUI.map((data, index)=>(
                  <tr key={index} style={{background: (rowSelected.indexOf(Object.keys(data)[0]) > -1)?"lightblue":"transparent"}}>
                      { rowselectapi.enable?<td key={index} className={"text-center"}>
                        <Form.Check data-id={Object.keys(data)[0]} type="checkbox"
                        checked={(rowSelected.indexOf(Object.keys(data)[0]) > -1)}
                        onChange={selectRow}>
                        </Form.Check></td>:''
                      }  
                      {
                          Object.keys(data[Object.keys(data)[0]]).map((k, index)=>(
                              header[k].hide?'':
                              <td key={index+1}>{data[Object.keys(data)[0]][k].toString()}</td>
                          ))
                      }
                  </tr>
              ))
          }
          </tbody>
      </Table>
      {
        showPagination?
            <Pagination bsPrefix={paginationapi.bsPrefix?paginationapi.bsPrefix:'pagination'}
                        size={paginationapi.size?paginationapi.size:'sm'}>
            {showPrev?<Pagination.Prev onClick={paginationPrev}/>:''}
            {
                paginationItems.map((itemPage, index)=>(
                    <Pagination.Item onClick={paginationClick} key={itemPage} active={currentPage===(itemPage-1)}>{itemPage}</Pagination.Item>
                ))
            }           
            {showNext?<Pagination.Next onClick={paginationNext}/>:''}
            </Pagination>
          :''
      }
    </div>)
}

MyBootstrapTable.propTypes = {
  'classname': PropTypes.string,
  'header': PropTypes.object,
  'pagesize': PropTypes.number,
  'paginationsize': PropTypes.number,
  'tabledata': PropTypes.array.isRequired,
  'paginationapi': PropTypes.object,
  'tableapi': PropTypes.object,
  'rowselectapi': PropTypes.object
}


export default MyBootstrapTable;
