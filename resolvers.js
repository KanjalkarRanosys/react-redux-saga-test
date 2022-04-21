
// import {users, locations} from "./gqData.js"

const users = require("./gqData")

import {randomBytes} from "crypto"


const resolvers = {
    Query: {
        users: ()=> users,
        user:(_, {by}) => users.find(user=> user.by ==by)
    },
    Mutation: {
        addUser:(_, {newUser}) => {
            const id = randomBytes(5).toString("hex")
            users.push({
                id,
                ...newUser
            })
            return users.find(user=>user.id == id)
    }}
}

export default resolvers;