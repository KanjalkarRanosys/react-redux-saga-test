// import {ApolloServer, gql} from "apollo-server"
const ApolloServer = require("apollo-server")
// import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
const ApolloServerPluginLandingPageGraphQLPlayground = require("apollo-server-core")

// import typeDefs from "./gqschema.js"
// import resolvers from "./resolvers.js"

const typeDefs = require("./gqschema")
const resolvers = require("./resolvers")



const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url})=>{
    console.log(`server is ready at ${url}`);
})