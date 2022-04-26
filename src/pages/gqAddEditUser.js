import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'

import { gql } from '@apollo/client';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsData } from '../redux/actions';
import { GET_POSTS } from './GQHome';

const UPDATE_MUTATION = gql`
mutation (
  $id: ID!,
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    body
  }
}
`

const CREATE_LINK_MUTATION = gql`
  mutation (
    $input: CreatePostInput!
  ) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const GqAddTodo = () => {

  const [formState, setFormState] = useState({});

  const navigate = useNavigate()
  const dispatch = useDispatch()

const [createPost, {data, loading, error}] = useMutation(CREATE_LINK_MUTATION);

console.log(data);

const [updatePost] = useMutation(UPDATE_MUTATION);

const {id} = useParams()
const {location} = useLocation()
const posts = useSelector(state=>state);
const allPosts = posts.data.posts.posts.data


const singlePost = allPosts.find((item) => Number(item.id) ===Number(id))

const getPosts = () => {
  dispatch(getPostsData())
}


useEffect(()=> {
  if(id) {
    setFormState(singlePost)
    console.log(singlePost);
} else {
}
},[])

        console.log(formState);
      
        return (
          <div>
            <form
        onSubmit={(e) => {
          e.preventDefault();
          getPosts()
          {
            !id ?
            createPost({
              variables: {
                input: formState
              }
            }) : 
            updatePost({
              variables: {
                input: formState
              }
            })
          }
        }}
      >
        <div className="flex flex-column mt3">
          <input
            name= "title"
            value={formState.input}
            onChange={(e) =>
              setFormState({
                ...formState,
                [e.target.name]: e.target.value
              })
            }
            type="text"
            placeholder="title"
          />
          <input
            className="mb2"
            value={formState.body}
            onChange={(e) =>
              setFormState({
                ...formState,
                body: e.target.value
              })
            }
            type="text"
            placeholder="Body"
          />
        </div>
        <button type="submit">{!id ? "Add" : "update"}</button>
        
      </form>

      {/* {params && <button onClick={()=>updatePost({
        variables: {input: formState}
      })}>
      updatePost
      </button>} */}

<button onClick={()=> navigate("/gq-home")}>Go Back</button>
      
      <br/>
      <br/>      
          </div>
        );
      }

export default GqAddTodo