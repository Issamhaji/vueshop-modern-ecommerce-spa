<template>
  <div>
    <the-header />
    <router-view />
  </div>
</template>

<script >

import TheHeader from "@/components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader
  }
}
</script>


<style scoped>

</style>
