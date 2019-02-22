<template>
  <v-container>
    <h1>Home</h1>

    <ApolloQuery :query="getPostsQuery">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error! {{ error.message }}</div>
        <ul v-else v-for="post in data.getPosts" :key="post.id">
          <li>{{ post.title }}</li>
        </ul>
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { gql } from "apollo-boost";
import { error } from "util";

export default {
  name: "home",
  data() {
    return {
      getPostsQuery: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            categories
            description
            createdDate
            likes
            createdBy {
              username
              avatar
            }
          }
        }
      `
    };
  }
  // apollo: {
  //   getPosts: {
  //     query: gql`
  //       query {
  //         getPosts {
  //           _id
  //           title
  //           imageUrl
  //           categories
  //           description
  //           createdDate
  //           likes
  //           createdBy {
  //             username
  //             avatar
  //           }
  //         }
  //       }
  //     `,
  //     result({ data, loading, networkStatus }) {
  //       if (!loading) {
  //         this.posts = data.getPosts;
  //         console.log("[networkStatus]", networkStatus);
  //       }
  //     },
  //     error(err) {
  //       console.error("[ERROR]", err);
  //     }
  //   }
  // }
};
</script>
