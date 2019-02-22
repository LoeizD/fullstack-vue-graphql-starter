import { gql } from 'apollo-boost'


export const GET_POSTS = gql`{
  getPosts {
    _id
    title
    imageUrl
  }
}
`