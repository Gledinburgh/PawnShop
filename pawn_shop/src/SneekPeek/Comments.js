import axios from 'axios';
import Moment from 'react-moment';
import {Table , Input} from 'antd';

import {useEffect, useState} from 'react';

const columns = [
  {title: null, dataIndex:'date', key: 'date', render: date => <Moment format="YYYY/MM/DD">{date}</Moment> , width: '5vw'},
  {title: null, dataIndex: 'name', key: null,  width: '20vw', render: name => <div style={{'text-align': 'right'}}><b>{name}</b> says:</div>},
  {title: null, dataIndex:'comment', key: 'comment'},
]

const Comments = ({guestEntries}) => {

  console.log(Array.isArray(guestEntries));
  console.log(guestEntries)

return (
  <>
  <div className="center">Sign our Guest Book!!</div>
  <div className="flex-row">
  <Input value={"name"} style={{height: '5vh', 'fontSize': '1vh'}}></Input>
  <Input value={"comment"} style={{height: '5vh', 'fontSize': '1vh'}}></Input>
  </div>
  {
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