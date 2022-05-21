<template>
  <button
    class="
      text-xl text-white
      rounded-xl
      font-semiboldfont-baloo
      w-64
      h-12
      bg-gradient-to-l
      to-Rouge
      from-Orange
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