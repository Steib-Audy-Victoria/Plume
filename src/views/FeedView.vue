<template>
  <div class="pt-16"></div>
  <div
    class="
      flex flex-col
      md:grid md:grid-cols-2
      xl:grid-cols-3
      place-items-center
    "
  >
    <PostFeed></PostFeed>
    <PostFeed></PostFeed>
    <PostFeed></PostFeed>
    <PostFeed></PostFeed>
  </div>
</template>

<script>
import PostFeed from "../components/PostFeed.vue";

export default {
  name: "App",
  components: {
    PostFeed,
  },
};
</script>