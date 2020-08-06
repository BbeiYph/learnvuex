<template>
  <div>
    {{message}}
    <h2>{{$store.state.num}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVue",
    data(){
      return {
        message:'hello vue'
      }
    },
    props:{
      // counter:0
    }
  }
</script>

<style scoped>

</style>
