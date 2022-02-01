/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useState, useEffect} from 'react';
import { Table, Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

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
 * 
 * return (
 *   <MyBootstrapTable header={header} tabledata={tabledata} pagesize={pagesize} paginationsize={paginationsize} />
 * )
 */
const MyBootstrapTable = ({className, header, tabledata, pagesize=0, paginationsize=5}) =>{
  
  const [paginationItems, setPaginationItems] = useState([]);
  const [currentPage, setCurrentPage]= useState(0);
  const [showPagination, setShowPagination] = useState(true);

  const [tableData, setTableData] = useState([]);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

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
    const table = (pagesize === 0) ? tabledata : tabledata.slice(offset).slice(0, pagesize);
    const totalPages = Math.ceil(tabledata.length / pagesize)|0;
    setTableData(table);
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

  useEffect(() => {
    showDataPage(0)
  }, [tabledata])

  return (
    <div  className={className}>
      <Table responsive striped bordered hover>
          {
            header?
              <thead>
                  <tr> {                    
                      Object.keys(header).map((k, index)=>(
                          <th key={index} width={header[k]['width']?header[k]['width']:'auto'}>
                            {header[k]['title']}
                          </th>
                      ))
                  }
                  </tr>
              </thead>
            :''
          } 
          <tbody> {
              tableData.map((data, index)=>(
                  <tr key={index}>
                      {
                          Object.keys(data).map((k, index)=>(
                              <td key={index+1}>{data[k].toString()}</td>
                          ))
                      }
                  </tr>
              ))
          }
          </tbody>
      </Table>
      {
        showPagination?
            <Pagination>
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
  'className': PropTypes.string,
  'header': PropTypes.object,
  'pagesize': PropTypes.number,
  'paginationsize': PropTypes.number,
  'tabledata': PropTypes.array.isRequired
}

export default MyBootstrapTable;
