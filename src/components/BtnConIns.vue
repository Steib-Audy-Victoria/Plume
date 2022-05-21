<template>
  <button
    class="
      font-semibold
      text-xl
      bg-white
      text-black
      rounded-xl
      w-48
      h-12
      drop-shadow-2xl
      font-baloo
      uppercase
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