<template>
  <button
    class="
      border-2 border-white
      bg-transparent
      w-80
      px-4
      rounded-md
      m-2
      p-2
      font-baloo
      text-white text-lg
      flex
      justify-center
    "
  >
    <img class="pr-8" :src="image" />
    {{ MsgBtn }}
  </button>
</template>

<script>
export default {
  props: {
    MsgBtn: String,
    image: String,
  },
};
</script>