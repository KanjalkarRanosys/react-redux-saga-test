import { useMutation } from '@apollo/client'
import { gql } from 'apollo-server-express'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useParams} from "react-router-dom"
import { CREATE_USER } from '../hooks/useCreateUser'
// import { CREATE_USER } from '../hooks/useCreateUser'
import { createUserStart, updateUserStart } from '../redux/actions'


const GqAddEditUser = () => {

    const [formValues, setFormValues] = useState({
        title:"",
        body:""
    })

    const [addTodo, { data, loading, error }] = useMutation(CREATE_USER);
    
    // const [formValue, setFormValue] = useState(initialState)
    // const {name, email, phone, username} = formValue;


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        })
        addTodo({
            variables: formValues
        })
    }

    // const [createPost, {data, loading, error}] = useMutation(CREATE_USER)

    // const mutation = useMutation()



    const onInputChange = (e) => {
        let {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

  return (
    <div>
        <h4>Add User Details</h4>
        <form onSubmit={handleSubmit}>
            <input 
                // value={name || ""}
                name="name"
                type="text"
                onChange={onInputChange}
                required
                label="Name"

            /><br/>
            <input 
                // value={username || ""}
                name="address"
                type="text"
                onChange={onInputChange}
                required
                label="Address"
                
            /><br/>
            {/* <input 
                // value={email || ""}
                name="email"
                type="text"
                onChange={onInputChange}
                required
                label="Email"
                
            /><br/>
            <input 
                // value={phone || ""}
                name="phone"
                type="number"
                onChange={onInputChange}
                required
                label="Phone"
                
            /><br/> */}
            <br/>
            <button type='submit'> ADD</button>
            {/* <button onClick={()=> navigate("/")}>Go Back</button> */}
        </form>
    </div>
  )
}

export default GqAddEditUser