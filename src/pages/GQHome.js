
import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import { loadUsersSuccess, singlePost } from '../redux/actions';

export const GET_POSTS = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}   
`

const DELETE_RECORD = gql`
mutation (
  $id: ID!
) {
  deletePost(id: $id)
}
`

const UPDATE_RECORD = gql`
mutation (
  $id: ID!
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    body
  }
}
`


const GQHome = () => {

  // console.log(Cache);

    const dispatch = useDispatch()
    const [updatePost] = useMutation(UPDATE_RECORD)


    const [deletePost, {data, loading, error}] = useMutation(DELETE_RECORD, {
      onCompleted: (data) => {
        console.log(data);
      }
    })


    if (!loading && !error && data) {
      console.log("Dataa");
    }

    if (loading == true) {
      console.log("loading");
    }

    console.log(loading);

    const {postsData} = useQuery(GET_POSTS);

    console.log(postsData);

  useEffect(()=> {
    console.log(postsData);
  },[postsData])


    const params = useParams()
    const [updateMode, setUpdateMode] = useState(true)

    const res = useUsers()
    dispatch(loadUsersSuccess(res))
    console.log(res);


    const remove = (id) => {
      console.log(id);
      deletePost({
        variables: {id}
      })
      console.log(postsData);
    }

    // const update = ({id, body}) => {
    //   updatePost({
    //     variables: { id, body }
    //   })
    // }

    const editPost = (item) => {
      console.log(item);
      dispatch(singlePost({...item}))
    }

  return (
    <div>
      {console.log(postsData)}
        <button>
          <Link to={`/gqAddUser`}>
            Add New Record in GraphQL
          </Link>
        </button>
          <table>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
              {/* <th>Email</th>
              <th>Phone</th> */}
            </tr>
            {res && res.posts.data.map((item, index)=> (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              {/* <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td> */}
              <td>
                <button>
                  <Link to={`/gquserView/${item.id}`}>
                    View
                  </Link>
                </button>
              </td>
              <td>
                <button onClick={()=>remove(900)}>
                    Delete
                </button>
              </td>
              <td>
                <button>
                  <Link to= {`/gqEditUser/${item.id}`}>
                    Edit
                    </Link>
                </button>
              </td>
            </tr>
            ))}
          </table>
          {console.log(updateMode)}
    </div>
  )
}

export default GQHome