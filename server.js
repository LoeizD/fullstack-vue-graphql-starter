const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })

console.log(process.env.MONGO_URI);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('💽💽💽 DB Connected'))
  .catch(err => console.error(err))

const todos = [
  { task: 'drive car', completed: false },
  { task: 'eat milk', completed: true },
  { task: 'clean garbage', completed: false },
]

const typeDefs = gql`
type Todo {
  task: String
  completed: Boolean
}
type Query {
  getTodos: [Todo]
}
`

const server = new ApolloServer({
  typeDefs
})

server.listen({ port: 6900 })
  .then(({ url }) => {
    console.log(`🍟🍟🍟 Server Listening on ${url}`)

  });