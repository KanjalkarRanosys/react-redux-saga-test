import React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client';


export const CREATE_USER = gql`
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

const useCreateUser = () => {
    
    const {data} = useQuery(CREATE_USER);
    console.log("data", data);

  return data
}

export default useCreateUser