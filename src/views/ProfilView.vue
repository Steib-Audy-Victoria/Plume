<template>
  <div class="pt-16">
    <div>
      <img src="/pro" alt="">
    <div class="flex">
      <settings></settings>
      <p>
        Laura_mg0t
      </p>
      <edit></edit>
    </div>  
    </div>


  </div>

</template>

<script>
 import settings from '../components/icons/settings.vue'
 import edit from '../components/icons/edit.vue'

 export default {
   components : {
     settings,
     edit
   }
 }
</script>

