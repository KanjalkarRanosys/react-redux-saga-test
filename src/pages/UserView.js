import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

const UserView = () => {

  const {users} = useSelector(state=> state.data)
  const {id} = useParams();
  const navigate = useNavigate()
  const singleUser = users.find((item)=> item.id == Number(id))

  return (
    <div>
      <h4>UserView</h4>
      <p>Id: {singleUser.id}</p>
      <p>Name: {singleUser.name}</p>
      <p>Email: {singleUser.email}</p>
      <p>Phone: {singleUser.phone}</p>
      <p>Address: {singleUser.address}</p><br/><br/><br/>
      <button onClick={()=> navigate("/")} >Go Back</button>
    </div>
  )
}

export default UserView