import Moment from 'react-moment';
import {Table , Input} from 'antd';
import {useEffect, useState} from 'react';

const columns = [
  {title: 'ENTRY DATE', dataIndex:'date', key: 'date', render: date => <Moment style ={{ color : '#fa7193'}}format="YYYY/MM/DD">{date}</Moment> , width: '15vw'},
  {title: 'ASSUMED NAME', dataIndex: 'name', key: 'guest-name',  width: '20vw', render: name => <div className="guest-name" style={{'text-align': 'center'}}><b>{name}</b></div>},
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