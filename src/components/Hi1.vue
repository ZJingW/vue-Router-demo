<template>
  <div class="about">
    <h1>{{ msg }} {{this.$route.params.username}}{{this.$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hi, I am Hi1'
    }
  }
}
</script>
<style scoped>

</style>