import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUserStart, loadUsersStart } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();

    const {users} = useSelector(state => state.data)

    useEffect(()=> {
        dispatch(loadUsersStart())
    }, [])

    const handleDelete =(id) => {
        console.log(id);
        // if (window.confirm("Are you sure want to delete this user")) {
            dispatch(deleteUserStart(id));
        // }
    }

  return (
    <div>
        <table>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
            {users && users.map((item, index) => (
                <tr>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                        <button>
                            <Link to={`/editUser/${item.id}`} >
                            Edit
                            </Link>
                            </button>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        <button>
                            <Link to={`/userView/${item.id}`}>
                            View
                            </Link>
                            </button>
                    </td>
                </tr>
            ))}
        </table>
        {console.log("users", users)}
    </div>
  )
}

export default Home