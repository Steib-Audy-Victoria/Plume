<template>
  <button
    class="
      text-xl
      bg-red-600
      text-white
      rounded-xl
      font-semiboldfont-baloo
      w-64
      h-12
    "
  >
    {{ MsgBtn }}
  </button>
</template>

<script>
export default {
  props: {
    MsgBtn: String,
  },
};
</script>