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
import tabledata from './sample-data.json';

const App = () => {
  const header = {'userId': {'title': 'User ID', 'width': '80px'},
                  'id': {'title':'ID', 'width': '60px'},
                  'title': {'title':'Description'}, 
                  'completed': {'title':'Is Complete', 'width': '200px'}};
  return <MyBootstrapTable className="m-3"  header={header} tabledata={tabledata} pagesize={20} ></MyBootstrapTable>
}

export default App
```

## License

MIT © [William Chui](https://github.com/William Chui)
