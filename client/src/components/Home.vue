<template>
  <v-container text-xs-center v-if="getPosts">
    <!--<v-flex xs12>
      <v-carousel v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in getPosts" :key="post._id" :src="post.imageUrl">
          <h1 id="carouse__title">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>-->
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
      // getPostsQuery: gql`
      //   query {
      //     getPosts {
      //       _id
      //       title
      //       imageUrl
      //       categories
      //       description
      //       createdDate
      //       likes
      //       createdBy {
      //         username
      //         avatar
      //       }
      //     }
      //   }
      // `
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

<style>
#carouse__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
