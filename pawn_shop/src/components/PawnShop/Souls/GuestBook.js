import Moment from 'react-moment';
import {Table , Input} from 'antd';
import {useEffect, useState} from 'react';

const columns = [
  {title: null, dataIndex:'date', key: 'date', render: date => <Moment format="YYYY/MM/DD">{date}</Moment> , width: '15vw'},
  {title: null, dataIndex: 'name', key: null,  width: '20vw', render: name => <div style={{'text-align': 'center'}}><b>{name}</b></div>},
]

const GuestBook = ({guestEntries}) => {

return (

  <div  className="guest-book center">

    {/* <Checkbox className="checkbox">I agree to the terms above</Checkbox> */}

    <Table pagination={false}columns={columns} dataSource={guestEntries}></Table>
  </div>
)

}

export default GuestBook;