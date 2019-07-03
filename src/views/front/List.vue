<template>
  <div class="blog-container">
    <ul class="blog-list">
      <li class="blog-li">
        <h1>这里是标题这里是标题这里是标题</h1>
        <h2>这里是正文概要</h2>
        <div class="blog-li-btm">
          <div class="left">
            <span class="author">我是作者</span>
            <span class="separate"></span>
            <span class="cate">我是分类</span>
            <span class="separate"></span>
            <span class="time">我是时间</span>
          </div>
          <div class="right">
            <span>阅读数 <span>17</span></span>
            <span class="separate"></span>
            <span>评论数 <span>2</span></span>
          </div>
        </div>
        <div class="to-detail">
          <a @click="showDetail()">查看详情>></a>
        </div>
      </li>
      <li class="blog-li">
        <h1>这里是标题这里是标题这里是标题</h1>
        <h2>这里是正文概要</h2>
        <div class="blog-li-btm">
          <div class="left">
            <span class="author">我是作者</span>
            <span class="separate"></span>
            <span class="cate">我是分类</span>
            <span class="separate"></span>
            <span class="time">我是时间</span>
          </div>
          <div class="right">
            <span>阅读数 <span>17</span></span>
            <span class="separate"></span>
            <span>评论数 <span>2</span></span>
          </div>
        </div>
        <div class="to-detail">
          <a>查看详情>></a>
        </div>
      </li>
      <li class="blog-li">
        <h1>这里是标题这里是标题这里是标题</h1>
        <h2>这里是正文概要</h2>
        <div class="blog-li-btm">
          <div class="left">
            <span class="author">我是作者</span>
            <span class="separate"></span>
            <span class="cate">我是分类</span>
            <span class="separate"></span>
            <span class="time">我是时间</span>
          </div>
          <div class="right">
            <span>阅读数 <span>17</span></span>
            <span class="separate"></span>
            <span>评论数 <span>2</span></span>
          </div>
        </div>
        <div class="to-detail">
          <a>查看详情>></a>
        </div>
      </li>
    </ul>
    <div class="pagination">
      1 2 3 4 5 6 7 8 9
    </div>
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

  methods: {
    showDetail: function () {
      this.$router.push('/home/detail')
    }
  },

  watch: {}

}

</script>
<style lang='scss' scoped>
.blog-container {
  padding: 30px;
}
.blog-list {
  // overflow: scroll;
  > .blog-li {
    position: relative;
    overflow: hidden;
    padding: 10px 20px;
    border: 1px solid #eae8ea;
    border-radius: 10px;
    box-shadow: 0 5px 3px 2px #eeeeee;
    margin-bottom: 30px;
    > h1 {
      font-size: 20px;
      margin-bottom: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > h2 {
      font-weight: normal;
      font-size: 14px;
      color: #8a8a8a;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > .blog-li-btm {
      font-size: 12px;
      color: #8a8a8a;
      .separate {
        height: 10px;
        background: #e0e0e0;
        width: 2px;
        display: inline-block;
        margin: 0 8px;
      }
      > .left {
        float: left;
        > .author {
          color: #333;
        }
      }
      > .right {
        float: right;
        margin-right: 80px;
        > span {
          > span {
            color: #157dcf;
          }
        }
      }
    }
    > .to-detail {
      position: absolute;
      bottom: 10px;
      right: 10px;
      cursor: pointer;
      > a {
        text-decoration: underline;
        color: #fff;
      }
    }
    &:hover {
      color: #fff;
      background: #157dcf;
      span,
      > h2 {
        color: #fff !important;
      }
      .separate {
        background: #649cc7;
      }
    }
  }
}
</style>
