import { useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'

import { gql } from '@apollo/client';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const GqEditPost = () => {

  const [formState, setFormState] = useState({});

const [updatePost] = useMutation(UPDATE_MUTATION);

// const updatePost = (a) => {
//     console.log(a);
// }

const {id} = useParams()
// const {location} = useLocation()
const posts = useSelector(state=>state);
const allPosts = posts.data.posts.posts.data
console.log(allPosts);
// const singlePost = {}


const singlePost = allPosts.find((item) => Number(item.id) === Number(id))


useEffect(()=> {
    setFormState(singlePost)
    console.log(singlePost);
},[])

        console.log("formState", formState);
      
        return (
          <div>
              {console.log(formState)}
            <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formState);
         
            updatePost({
              variables: {
                input:formState
              }
            }, console.log("formState", formState))
        }}
      >
        <div className="flex flex-column mt3">
          <input
            name= "body"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value
              })
            }
            type="text"
            placeholder="title"
          />
          {/* <input
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
          /> */}
        </div>
        <button type="submit">update</button>
        
      </form>

      {/* {params && <button onClick={()=>updatePost({
        variables: {input: formState}
      })}>
      updatePost
      </button>} */}
      
      <br/>
      <br/>
      <br/>
      <br/>
      
          </div>
        );
      }

export default GqEditPost