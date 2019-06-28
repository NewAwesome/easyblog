<template>
  <div>
    <div class="header"></div>
    <div class="container w1242">
      <div class="nav"></div>
      <ul class="left-bar"></ul>
      <div class="right-bar"></div>
    </div>
    <div class="footer"></div>

    Home
    <router-view></router-view>
    <router-link to="list">list</router-link>
    <router-link to="detail">detail</router-link>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data () {
    return {

    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {},

  watch: {}

}

</script>
<style lang='scss' scoped>
.header {
  height: 150px;
  background: blue;
}
.container {
  > .nav {
    height: 70px;
    background: green;
  }
  > .left-bar {
    height: 500px;
    width: 70%;
    box-sizing: border-box;
    float: left;
    background: red;
  }
  > .right-bar {
    height: 100px;
    width: 30%;
    box-sizing: border-box;
    float: right;
    background: grey;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  background: black;
  height: 50px;
  width: 100%;
}
</style>
