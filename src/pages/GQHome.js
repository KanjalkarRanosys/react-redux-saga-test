
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import { deleteUserStart, gqloadUsersStart, loadUsersStart } from '../redux/actions';

const GQHome = () => {

    const dispatch = useDispatch()

    const data = useUsers()
    console.log(data);


    // useEffect(()=> {
    //     dispatch(gqloadUsersStart())
    // }, [])

  return (
    <div>
        <button>
          <Link to={`/gqAddUser`}>
            Add New Record in GraphQL
          </Link>
        </button>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {data && data.users.data.map((item, index)=> (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button>
                  <Link to={`/gquserView/${item.id}`}>
                    View
                  </Link>
                </button>
              </td>
            </tr>
            ))}
          </table>
    </div>
  )
}

export default GQHome