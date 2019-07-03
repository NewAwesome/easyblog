<template>
  <div class="detail-container">
    <div class="detail">
      <h1>我是标题</h1>
      <div class="info">
        时间
        &nbsp;&nbsp;&nbsp;<span>用户名</span>&nbsp;&nbsp;&nbsp;
        阅读数 3306
      </div>
      <div class="divisor"></div>
      <div class="content">
        <p>产品面向的是用户，而不是开发者自己，在开发者开来，选择某个技术栈也许很重要，但是对于用户来说，很抱歉，他们完全不关心！用户关心的是：是否有我想要的功能？UI设计是否合理？BUG有没有及时修复？生活中，我们都是用户，我们每天聊微信、刷抖音、逛京东、打王者荣耀，你会关心它们的后台是用Java还是用Node.js吗？

          如果产品的技术栈还没有确定，选择一个目前使用者足够多并且保持更新的技术就好了，用的人多的技术不会太差，还在更新则不用担心BUG没人修复。如果产品的技术栈已经确定了，那就更简单了，直接撸代码啊；即使技术选择有一些问题，抱怨是没有用的，也没人愿意为了你的个人偏好去换技术栈，除非是产品需要。

          作为开发者，应该利用自己已经掌握和需要学习的技术去实现一个好用的产品，满足用户的需求。如果产品没有成功，有可能是产品的需求有问题，没有市场；有可能市场很大，但是推广得不够成功；有可能推广得不错，但是商业模式有问题，赚不到钱…当然，也有可能是技术问题，是技术不够好，而不太可能是技术选择错了。
        </p>
      </div>
      <div class="divisor"></div>
      <button style="button"
              @click="showLi()">返回</button>
    </div>
    <div class="comment">
      <div class="comment-list">
        <div class="comment-top">
          <p class="comment-top-title">评论</p>
          <p class="comment-top-num">共<span> 2 </span>条评论</p>
        </div>
        <ul>
          <li>
            <span class="comment-username">Jhon </span>:
            <span>这是评论内容</span>
          </li>
          <li>
            <span class="comment-username">Jhon </span>:
            <span>这是评论内容</span>
          </li>
          <li>
            <span class="comment-username">Jhon </span>:
            <span>这是评论内容</span>
          </li>
          <li>
            <span class="comment-username">Jhon </span>:
            <span>这是评论内容</span>
          </li>
        </ul>
      </div>
      <div class="comment-publish">
        <!-- if no login -->
        <div class="no-login">
          您还没有登陆，请登录后发表评论！
        </div>
        <!-- if login -->
        <div class="has-login">
          <textarea class="text"
                    cols="30"
                    rows="10"
                    placeholder="请填写评论"></textarea>
          <button type="button"
                  class="commit-btn">提交</button>
        </div>
      </div>
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
    showLi: function () {
      this.$router.push('/home/list')
    }
  },

  watch: {}

}

</script>
<style lang='scss' scoped>
.detail-container {
  padding: 30px;
  > .detail {
    padding: 10px 20px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #eae8ea;
    box-shadow: 0 5px 3px 2px #eeeeee;

    > h1 {
      color: #157dcf;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    > .info {
      font-size: 14px;
      margin-bottom: 10px;
      > span {
        color: #157dcf;
      }
    }
    > .divisor {
      margin-bottom: 20px;
      height: 1px;
      background: #eae8ea;
    }
    > .content {
      margin-bottom: 20px;
      > p {
        font-size: 16px;
      }
    }
    > button {
      cursor: pointer;
      color: #fff;
      padding: 10px 60px;
      border-radius: 5px;
      background: #367fc9;
      border: 1px solid #367fc9;
    }
  }
  > .comment {
    background: #fff;
    padding: 10px 20px;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid #eae8ea;
    box-shadow: 0 5px 3px 2px #eeeeee;
    > .comment-list {
      > .comment-top {
        overflow: hidden;
        margin-bottom: 10px;
        > .comment-top-title {
          float: left;
          font-size: 20px;
          color: #157dcf;
          font-weight: 600;
        }
        > .comment-top-num {
          float: right;
          > span {
            color: #157dcf;
            font-size: 14px;
          }
        }
      }
      > ul {
        clear: both;
        > li {
          padding: 10px 0;
          > .comment-username {
            font-size: 14px;
          }
        }
        > li + li {
          border-top: 1px solid #eae8ea;
        }
      }
    }
    > .comment-publish {
      > .no-login {
        display: none;
        font-size: 16px;
        font-weight: 600;
        padding: 20px 0;
        color: #157dcf;
      }
      > .has-login {
        margin-top: 15px;
        > .text {
          padding: 10px;
          width: 97%;
          height: 80px;
          font-size: 16px;
        }
        > .commit-btn {
          cursor: pointer;
          margin-top: 14px;
          color: #fff;
          padding: 10px 60px;
          border-radius: 5px;
          background: #367fc9;
          border: 1px solid #367fc9;
        }
      }
    }
  }
}
</style>
