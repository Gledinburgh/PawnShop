import axios from 'axios';
import Moment from 'react-moment';
import {Table} from 'antd';

import {useEffect, useState} from 'react';

const columns = [
  {title: null, dataIndex:'date', key: 'date', render: date => <Moment format="YYYY/MM/DD">{date}</Moment> , width: '5vw'},
  {title: null, dataIndex: 'name', key: null,  width: '20vw', render: name => <div style={{'text-align': 'right'}}>{name} says:</div>},
  {title: null, dataIndex:'comment', key: 'comment'},
]

const Comments = ({guestEntries}) => {

  console.log(Array.isArray(guestEntries));
  console.log(guestEntries)

return (
  <>{
    guestEntries.map(guestEntry => {
      return (
        <>
       <Table columns={columns} dataSource={guestEntries}></Table>
      </>
      )
    })
  }</>
)

}

export default Comments;