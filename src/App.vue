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
  }
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
