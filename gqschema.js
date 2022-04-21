// import {gql} from "apollo-server"

const gql = require("apollo-server")


const typeDefs = gql`
type Query {
    users: [User]
    user(id:ID!):User
}

type User{
    id: ID!
    firstName:String!
    lastName:String!
    email:String
}

type Mutation{
    addUser(newUser: UserInput!):User
}

input UserInput{
    firstName: String!
    lastName: String!
    email: String!
}


`

export default typeDefs