<template>
  <div>
    <div class="header">
      <img src="../../assets/header.jpg"
           alt="">
      <div class="nav">
        <div class="nav-container w1342">
          <home-nav :categories="categoryList"
                    @toggle-cat="currentCate = $event"></home-nav>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="container w1342">
        <ul class="left-bar">
          <router-view></router-view>
        </ul>
        <div class="right-bar">
          <user-mp></user-mp>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Nav from '../../components/Nav'
import UserMp from '../../components/UserMp'
export default {
  name: '',
  props: [''],
  data () {
    return {
      categoryList: [],
      currentCate: '首页',
      currentDetail: {}
    }
  },

  components: {
    'home-nav': Nav,
    'user-mp': UserMp
  },
  created () {
    this.$http.get('/auth/catList')
      .then((res) => {
        if (res.data.success) {
          this.categoryList = res.data.data
        }
      })
  },
  computed: {},

  beforeMount () { },

  mounted () {

  },

  methods: {
    showDetail (param) {
      this.currentDetail = param
      this.$router.push('/home/detail')
    }
  },

  watch: {
    currentCate: function () {
      let index = this.categoryList.indexOf(this.currentCate)
      this.$router.push('/home/list/' + index)
    }
  }

}

</script>
<style lang='scss' scoped>
.header {
  overflow: hidden;
  > img {
    display: block;
    height: 270px;
  }
  > .nav {
    height: 70px;
    background: #fff;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
.body {
  padding-top: 20px;
  overflow: hidden;
  margin-bottom: 50px;
  > .container {
    > .left-bar {
      width: 69%;
      box-sizing: border-box;
      float: left;
      background: #fff;
      border-radius: 10px;
    }
    > .right-bar {
      overflow: hidden;
      margin: 0 1%;
      width: 29%;
      box-sizing: border-box;
      float: right;
      background: #fff;
      border-radius: 10px;
    }
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
