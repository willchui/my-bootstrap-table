/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {useState, useEffect} from 'react';
import { Table, Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
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
 * 
 * return (
 *   <MyBootstrapTable header={header} tabledata={tabledata} pagesize={pagesize} paginationsize={paginationsize} />
 * )
 */
const MyBootstrapTable = ({classname, header, tabledata, pagesize=0, paginationsize=5, paginationapi={}, tableapi={}}) =>{
  
  const [paginationItems, setPaginationItems] = useState([]);
  const [currentPage, setCurrentPage]= useState(0);
  const [showPagination, setShowPagination] = useState(true);

  const [tableData, setTableData] = useState([]);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const [currentSortID, setcurrentSortID] = useState("");
  const [isDesc, setDesc] = useState(false);

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
  
  const sortHandle = (e) =>{
    const key = e.target.dataset.id;
    if(key === undefined)
       return;

    setcurrentSortID(key);
    tabledata.sort((f, s) =>{
      /** Find out item type DateTime, String or number. */        
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

  useEffect(() => {
    showDataPage(0)
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
                  <tr> {                    
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
              tableData.map((data, index)=>(
                  <tr key={index}>
                      {
                          Object.keys(data).map((k, index)=>(
                              header[k].hide?'':
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
  'paginationapi': PropTypes.string,
  'tableapi': PropTypes.string
}


export default MyBootstrapTable;
