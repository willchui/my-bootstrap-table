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
  const header = {'userId': {'title': 'User ID', 'width': '60px'},
                  'id': {'title':'ID', 'width': '60px'},
                  'title': {'title':'Description'}, 
                  'completed': {'title':'Is Complete', 'width': '200px'}};
  const tabledata = [
    { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
    { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false },
    { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false },
    { "userId": 1, "id": 4, "title": "et porro tempora", "completed": true },
    { "userId": 1, "id": 5, "title": "laboriosam mollitia et enim quasi adipisci quia provident illum", "completed": false },
    { "userId": 1, "id": 6, "title": "qui ullam ratione quibusdam voluptatem quia omnis", "completed": false },
    { "userId": 1, "id": 7, "title": "illo expedita consequatur quia in", "completed": false },
    { "userId": 1, "id": 8, "title": "quo adipisci enim quam ut ab", "completed": true },
    { "userId": 1, "id": 9, "title": "molestiae perspiciatis ipsa", "completed": false },
    { "userId": 1, "id": 10, "title": "illo est ratione doloremque quia maiores aut", "completed": true },
    { "userId": 1, "id": 11, "title": "vero rerum temporibus dolor", "completed": true },
    { "userId": 1, "id": 12, "title": "ipsa repellendus fugit nisi", "completed": true },
    { "userId": 1, "id": 13, "title": "et doloremque nulla", "completed": false },
    { "userId": 1, "id": 14, "title": "repellendus sunt dolores architecto voluptatum", "completed": true },
    { "userId": 1, "id": 15, "title": "ab voluptatum amet voluptas", "completed": true },
    { "userId": 1, "id": 16, "title": "accusamus eos facilis sint et aut voluptatem", "completed": true },
    { "userId": 1, "id": 17, "title": "quo laboriosam deleniti aut qui", "completed": true },
    { "userId": 1, "id": 18, "title": "dolorum est consequatur ea mollitia in culpa", "completed": false },
    { "userId": 1, "id": 19, "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil", "completed": true },
    { "userId": 1, "id": 20, "title": "ullam nobis libero sapiente ad optio sint", "completed": true }
    ];                  
  return <MyBootstrapTable className="m-3"  header={header} tabledata={tabledata} paginationsize={5} pagesize={10} ></MyBootstrapTable>
}

export default App
```

## License

MIT © [William Chui](https://github.com/William Chui)
