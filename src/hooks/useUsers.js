import React from 'react'
import { gql, useQuery } from '@apollo/client';


const GET_USERS = gql`
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

const useUsers = () => {
    
    const {data} = useQuery(GET_USERS);
    console.log("data", data);

  return data
}

export default useUsers