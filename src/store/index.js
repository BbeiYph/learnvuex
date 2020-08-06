import Vue from "vue";
import Vuex from 'vuex';

//1. 安装插件
Vue.use(Vuex);

const moduleA = {
  state: {
    name:'苹果'
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}


//2. 创建对象
const store = new Vuex.Store({
  state:{   //要存放的状态
    num:100,
    info:{
      name:'bbei',
      age:18
    }
  },
  mutations:{   //执行的方法，必须在这里执行不然无法跟踪到状态改变
    increment(state,n){
      state.num+=n;
    },
    decrement(state){
      state.num--;
    },
    changeInfo(state){
      state.info.name = 'qiqi';
      Vue.set(state.info,'sex','女')
      // state.info['sex'] = '女'
    }
  },
  actions:{
    //context  上下文,相当于store  默认参数
    aUpdateInfo(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('changeInfo');
          console.log(payload);
          resolve();
        },1000)
      })
    }
  },
  getters:{

  },
  modules:{
    a:moduleA,
  }
});

//3. 导出store
export default store;
