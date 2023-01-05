import React, { useContext } from 'react'
import { AppContext } from '../user/Contest';
import User from './User'

export default function UserList() {
    const {users} =useContext(AppContext);
  return (
    <>
      
      <h3>Available Users</h3>
      <div className="card m-4" style={{borderColor:"green",borderSize:"3px"}}>
			 {users && users.map(user => <User key={user.id} user={user} />)}
      </div>
    </>
  )
}
