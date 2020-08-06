<template>
  <div id="app">
    {{$store.state.num}}
    <button @click="add(5)">+5</button>
    <button @click="add(10)">+10</button>
    <h2>{{counter}}</h2>
    <h3>{{$store.state.info}}</h3>
    <button @click="changeInfo">修改信息</button>
    <p>--------------------------</p>
    <h2>{{$store.state.a.name}}</h2>
    <p>---------------------------</p>
    <hello-vue></hello-vue>
  </div>
</template>

<script>
  import HelloVue from "./components/HelloVue";

  export default {
    name: 'App',
    data(){
      return {
        counter:0
      }
    },
    methods:{
      add(n){
        this.$store.commit('increment',n);
      },
      sub(){
        this.$store.commit('decrement');
      },
      changeInfo(){
        // this.$store.commit('changeInfo');

        //模拟异步 经过action
        this.$store.dispatch('aUpdateInfo','message').then(res=>{
          console.log('回调完成')
        })
      }
    },
    components: {
      HelloVue,
    }
  }
</script>

<style>
</style>
