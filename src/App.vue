<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import MyButton from './components/MyButton'
export default {
  components: {
    // MyButton: MyButton
  },
  created () {
    // 解决vuex刷新丢失数据
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  },
}
</script>
<style lang="scss">
#app {
  background: #eee;
}
* {
  margin: 0;
  padding: 0;
}
dl {
  margin-bottom: 0;
}
li {
  list-style: none;
}
.w1342 {
  width: 1342px;
  margin: 0 auto;
}
</style>
