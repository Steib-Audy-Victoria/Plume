<template>
  <div class="bg-gradient-to-r to-Orange from-Rouge w-max rounded-xl p-0.5 m-6">
    <button
      class="text-xl bg-white rounded-xl font-semibold font-baloo w-64 h-12"
    >
      {{ MsgBtn }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    MsgBtn: String,
  },
};
</script>