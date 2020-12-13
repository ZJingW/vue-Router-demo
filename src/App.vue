<template>
  <div id="app">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
       <router-link :to="{name:'hi1',params:{username:'ZJingW',id:'888'}}">-Hi页面1</router-link> |
      <router-link to="/about/hi2">-Hi页面2</router-link>|
      <router-link to="/parmas/19/ZJingW">Parmas</router-link>|
      <router-link to='/goback'>goback</router-link>|
      <router-link to="/goParmas/100/LX">GoParmas</router-link>|
      <router-link to="/ZJW">ZJW-Hi2</router-link> |
      <router-link to="/bbbbbb">我是瞎写的</router-link> |
      
       <!-- <router-link to='/parmas'>Parmas</router-link> -->
    </div>

    <!-- <p>{{this.$route.name}}</p> -->
    <transition name='fade' mode="out-in">
<!-- fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。 -->
<!-- mode属性 in-out:新元素先进入过渡，完成之后当前元素过渡离开。
out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。 -->
     <router-view ></router-view>
    </transition>

 <!-- <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view> -->
  </div>
</template>

<script>
export default {

  methods:{
    goBack(){
       this.$router.go(-1) //编程式导航
    },
    goGo(){
      this.$router.go(1)
    },
    goHome(){
      //this.$router.push('/about/Hi1')
      this.$router.push('/')
    }
    
    
  },

}
</script>



<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;;
}

</style>
