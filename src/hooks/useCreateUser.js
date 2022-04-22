import React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client';


export const CREATE_USER = gql`
mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`;

// const useCreateUser = () => {
    
//     const {data} = useMutation(CREATE_USER);
//     console.log("data", data);

//   return data
// }

// export default useCreateUser