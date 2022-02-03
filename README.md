# @willchui/my-bootstrap-table

> MyBootstrapTable component is sortable with pagination table, it is base on React Bootstrap Table and Pagination version 5.1.

[![NPM](https://img.shields.io/npm/v/@willchui/my-bootstrap-table.svg)](https://www.npmjs.com/package/@willchui/my-bootstrap-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @willchui/my-bootstrap-table
```

## Usage

```jsx

import React from 'react';
import MyBootstrapTable from '@willchui/my-bootstrap-table';

const App = () => {
  const header = {'datetime': {'title': 'Date', 'width': '200px', 'sortable':true, 'hide': false},
                  'userId': {'title': 'User ID', 'width': '80px', 'sortable':false, 'hide': true},
                  'id': {'title':'ID', 'width': '60px' , 'sortable':true},
                  'title': {'title':'Description', 'sortable':false}, 
                  'completed': {'title':'Complete', 'width': '200px', 'sortable':true}};
  const tabledata = [
    { "datetime": "12/25/2021 10:14:02 AM", "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
    { "datetime": "12/24/2021 10:12:02 AM", "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false },
    { "datetime": "12/23/2021 10:11:05 AM", "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false },
    { "datetime": "12/22/2021 10:10:02 AM", "userId": 1, "id": 4, "title": "et porro tempora", "completed": true },
    { "datetime": "12/24/2021 10:09:01 AM", "userId": 1, "id": 5, "title": "laboriosam mollitia et enim quasi adipisci quia provident illum", "completed": false },
    { "datetime": "12/24/2021 10:09:00 AM", "userId": 1, "id": 6, "title": "qui ullam ratione quibusdam voluptatem quia omnis", "completed": false },
    { "datetime": "12/24/2021 10:08:52 AM", "userId": 1, "id": 7, "title": "illo expedita consequatur quia in", "completed": false },
    { "datetime": "12/24/2021 10:08:59 AM", "userId": 1, "id": 8, "title": "quo adipisci enim quam ut ab", "completed": true },
    { "datetime": "12/24/2021 10:08:03 AM", "userId": 1, "id": 9, "title": "molestiae perspiciatis ipsa", "completed": false },
    { "datetime": "12/23/2021 09:14:08 PM", "userId": 1, "id": 10, "title": "illo est ratione doloremque quia maiores aut", "completed": true }
    ];                  
  return <MyBootstrapTable 
      classname="m-3" 
      header={header} 
      tabledata={tabledata} 
      paginationsize={5} 
      pagesize={5} 
      /** Please see the https://react-bootstrap.github.io/components/table API for more detials. */
      tableapi={{'bordered': true, 'borderless': false, 'hover': false, 
                 'responsive': true, 'size': 'sm', 'striped': true}}
      /** Please see the https://react-bootstrap.github.io/components/pagination API for more detials. */
      paginationapi={{'size': 'sm', 'bsPrefix': 'pagination justify-content-end'}}>
  </MyBootstrapTable>
}

export default App
```

## API Prop 

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>classname </td>
      <td><div>string</div></td>
      <td></td>
      <td>
      <div><p>The className of MyBootstrapTable container.</p></div></td>
    </tr>
    <tr>
      <td >header</td>
      <td><div>object</div></td>
      <td></td>
      <td><div><p>The structure looks like:<br><pre>
{ 
  column_num_1_key:
  {
    'title': (string)column_title,
    'width': (string)css_width,
    'sortable': (boolean)is_sortable,
    'hide': (boolean)hide_column
    },
    column_num_x_key:{...}
  ... 
}</p></div></td>
      </pre>
    </tr>
    <tr>
      <td >tabledata</td>
      <td><div>array</div></td>
      <td></td>
      <td><div><p>The structure looks like:<br><pre>
[
  {
    column_num_1_key:(any),
    column_nun_2_key:(any),
    ...
  },
  ...
]
      </p></div></td>
      </pre>
    </tr>    
    <tr>
      <td >paginationsize </td>
      <td ><div>number</div></td>
      <td>5</td>
      <td><div ><p>The number of pagination buttons.</p></div></td>
    </tr>
    <tr ><td >pagesize</td>
    <td><div>number</div></td>
    <td>0</td>
    <td><div><p>The number of rows per page.</p></div></td></tr>
    <tr><td>tableapi</td><td ><div>object</div></td><td></td>
    <td><div><p>The structure looks like:<br><pre>
{
  'bordered': (boolean),
  'borderless': (boolean), 
  'hover': (boolean), 
  'responsive': (string|boolean),
  'size': (string),
  'striped': (boolean),
  'bsPrefix': (string)
}
</pre</p>
<p>Please see the <a href='https://react-bootstrap.github.io/components/table'>https://react-bootstrap.github.io/components/table</a> API for more detials.</p></div></td></tr>
    <tr><td >paginationapi </td><td ><div>object</div></td><td><code ></code></td><td><div ><p>The structure looks like:<br><pre>
{
  'size': (string),
  'bsPrefix': (string)
}
</pre</p>
<p>Please see the <a href='https://react-bootstrap.github.io/components/pagination'>https://react-bootstrap.github.io/components/pagination</a> API for more detials.</p></div></td></tr>
    
</tbody></table>

## MyBootstrapTable Demo

Quick Demo in <a href="https://stackblitz.com/edit/react-mybootstrap-table-demo?file=src%2FApp.js">Stackblitz</a>.

## License

MIT © [William Chui](https://github.com/William Chui)
