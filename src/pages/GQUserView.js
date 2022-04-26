import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import useUsers from '../hooks/useUsers'

const GQUserView = () => {

  const data = useUsers()
  console.log(data);
  const {id} = useParams();
  const navigate = useNavigate()
  const singleUser = data.posts.data.find((item)=> item.id == Number(id))

  return (
    <div>
      <h4>GQUserView</h4>
      <p>Id: {singleUser.id}</p>
      <p>Name: {singleUser.title}</p>
      {/* <p>Email: {singleUser.email}</p>
      <p>Phone: {singleUser.phone}</p>
      <p>Address: {singleUser.address}</p><br/><br/><br/> */}
      <button onClick={()=> navigate("/gq-home")} >Go Back</button>
    </div>
  )
}

export default GQUserView