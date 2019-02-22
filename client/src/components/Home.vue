<template>
  <v-container text-xs-center>
    <v-flex xs12>
      <v-carousel v-if="posts.length > 0" v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carouse__title">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { gql } from "apollo-boost";
import { error } from "util";

export default {
  name: "home",
  created() {
    this.handleCarouselPosts();
  },
  methods: {
    handleCarouselPosts() {
      this.$store.dispatch("getPosts");
    }
  },
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  }
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
