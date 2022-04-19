import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useParams} from "react-router-dom"
import { createUserStart, updateUserStart } from '../redux/actions'

const initialState = {
    name: "",
    email:"",
    phone:"",
    address:"",
}

const AddEditUser = () => {

    const dispatch = useDispatch()
    const {users} = useSelector(state=> state.data)

    const {id} = useParams()
    
    const [formValue, setFormValue] = useState(initialState)
    const {name, email, phone, address} = formValue;
    const [editMode, setEditMode] = useState(false)

    const navigate = useNavigate();

    useEffect(()=> {
        if(id) {
            setEditMode(true)
            const singleUser = users.find((item) => item.id ===Number(id))
            setFormValue({...singleUser})
        } else {
            setEditMode(false)
            setFormValue({...initialState})
        }
    },[id])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && phone && address) {
            if (!editMode) {
                dispatch(createUserStart(formValue))
                setTimeout(() => navigate("/"), 500)                
            } else {
                dispatch(updateUserStart({id, formValue}))
                setEditMode(false)
                setTimeout(() => navigate("/"), 500)  
            }
        }
    }

    const onInputChange = (e) => {
        let {name, value} = e.target
        setFormValue({...formValue, [name]: value})
    }

  return (
    <div>
        <h4>{!editMode ? "Add User Details" : "Edit User Details"}</h4>
        <form onSubmit={handleSubmit}>
            <input 
                value={name || ""}
                name="name"
                type="text"
                onChange={onInputChange}
                required
                label="Name"

            /><br/>
            <input 
                value={email || ""}
                name="email"
                type="text"
                onChange={onInputChange}
                required
                label="Email"
                
            /><br/>
            <input 
                value={phone || ""}
                name="phone"
                type="number"
                onChange={onInputChange}
                required
                label="Phone"
                
            /><br/>
            <input 
                value={address || ""}
                name="address"
                type="text"
                onChange={onInputChange}
                required
                label="Address"
                
            /><br/>
            <br/>
            <button type='submit'>  {!editMode ? "ADD" : "Update"}</button>
            <button onClick={()=> navigate("/")}>Go Back</button>
        </form>
    </div>
  )
}

export default AddEditUser