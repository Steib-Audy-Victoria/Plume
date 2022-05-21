<template>
  <button
    class="
      w-max
      p-1
      h-24px
      rounded-3xl
      border-2 border-gradient-l-ligne
      font-baloo font-semibold
      px-3
    "
  >
    {{ CatBtn }}
  </button>
</template>

<script>
export default {
  props: {
    CatBtn: String,
  },
};
</script>