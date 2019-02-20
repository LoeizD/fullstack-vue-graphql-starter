const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

// Import typedefs and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8')
const resolvers = require('./resolvers')

// Import Env Vars and mongoose models
require('dotenv').config({ path: 'variables.env' })
const User = require('./models/User')
const Post = require('./models/Post')

// Connect to MLab DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('💽💽💽 DB Connected'))
  .catch(err => console.error(err))

// Create Apollo/GQL server using typeDefs, resolvers and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post,
  }
})

server.listen({ port: 6900 })
  .then(({ url }) => {
    console.log(`🍟🍟🍟 Server Listening on ${url}`)
  })