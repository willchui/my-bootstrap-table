# @willchui/my-bootstrap-table

> Bootstrap table with paging that using boostrap pagination

[![NPM](https://img.shields.io/npm/v/@willchui/my-bootstrap-table.svg)](https://www.npmjs.com/package/@willchui/my-bootstrap-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @willchui/my-bootstrap-table
```

## Usage

```jsx

import React from 'react';
import MyBootstrapTable from '@willchui/my-bootstrap-table';
import '@willchui/my-bootstrap-table/dist/index.css';


const App = () => {
  const header = {'datetime': {'title': 'Date', 'width': '200px', 'sortable':true},
                  'userId': {'title': 'User ID', 'width': '80px', 'sortable':false},
                  'id': {'title':'ID', 'width': '60px' , 'sortable':true},
                  'title': {'title':'Description', 'sortable':true}, 
                  'completed': {'title':'Is Complete', 'width': '200px', 'sortable':true}};
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
    { "datetime": "12/23/2021 09:14:08 PM", "userId": 1, "id": 10, "title": "illo est ratione doloremque quia maiores aut", "completed": true },
    { "datetime": "12/22/2021 08:04:07 AM", "userId": 1, "id": 11, "title": "vero rerum temporibus dolor", "completed": true },
    { "datetime": "12/21/2021 08:24:03 AM", "userId": 1, "id": 12, "title": "ipsa repellendus fugit nisi", "completed": true },
    { "datetime": "12/21/2021 07:32:09 AM", "userId": 1, "id": 13, "title": "et doloremque nulla", "completed": false },
    { "datetime": "12/20/2021 06:22:05 PM", "userId": 1, "id": 14, "title": "repellendus sunt dolores architecto voluptatum", "completed": true },
    { "datetime": "12/20/2021 05:11:22 AM", "userId": 1, "id": 15, "title": "ab voluptatum amet voluptas", "completed": true },
    { "datetime": "12/19/2021 11:15:18 AM", "userId": 1, "id": 16, "title": "accusamus eos facilis sint et aut voluptatem", "completed": true },
    { "datetime": "12/18/2021 10:52:15 AM", "userId": 1, "id": 17, "title": "quo laboriosam deleniti aut qui", "completed": true },
    { "datetime": "12/17/2021 05:44:12 PM", "userId": 1, "id": 18, "title": "dolorum est consequatur ea mollitia in culpa", "completed": false },
    { "datetime": "12/16/2021 03:33:02 AM", "userId": 1, "id": 19, "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil", "completed": true },
    { "datetime": "12/15/2021 01:32:01 PM", "userId": 1, "id": 20, "title": "ullam nobis libero sapiente ad optio sint", "completed": true }
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

## License

MIT © [William Chui](https://github.com/William Chui)
