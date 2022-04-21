import React from 'react'
import { gql, useQuery } from '@apollo/client';


const GET_USERS = gql`
query {
    users {
      data {
        id
        name
        username
        email
        phone
      }
    }
  }      
`

const useUsers = () => {
    
    const {data} = useQuery(GET_USERS);
    console.log("data", data);

  return data
}

export default useUsers