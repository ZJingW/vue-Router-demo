
<template>
  <div class="about">
    <h1>{{ msg }}</h1>
      <p>newsId:{{$route.params.newsId}}</p>
     <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>
<script>
export default {
    name:'parmas',
  data () {
    return {
      msg: 'Hi, I am Parmas'
    }
  },
  beforeRouteEnter (to, from, next) {
      console.log("准备进入parmas路由模板！")
     next();//一定要写next（）
  },
  beforeRouteLeave (to, from, next) {
      console.log("准备离开parmas路由模板！")
      next();
  }
//   ** 写在模板中的钩子函数 ** 
// 在配置文件中的钩子函数，只有一个钩子-beforeEnter，如果我们写在模板中就可以有两个钩子函数可以使用：

// beforeRouteEnter：在路由进入前的钩子函数。
// beforeRouteLeave：在路由离开前的钩子函数。
}
</script>
<style scoped>
</style>