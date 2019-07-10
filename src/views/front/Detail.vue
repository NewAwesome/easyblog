<template>
  <div class="detail-container">
    <div class="detail">
      <h1>{{cdetail.title}}</h1>
      <div class="info">
        {{cdetail.addtime}}
        &nbsp;&nbsp;&nbsp;<span>{{cdetail.user}}</span>&nbsp;&nbsp;&nbsp;
        阅读数 {{cdetail.num}}
      </div>
      <div class="divisor"></div>
      <div class="content">
        <p>{{cdetail.composition}}
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
          <p class="comment-top-num">共<span> {{cdetail.comment.length}} </span>条评论</p>
        </div>
        <ul>
          <li v-for="(item, index) in cdetail.comment"
              :key="index">
            <span class="comment-username">{{item.user}} </span>:
            <span>{{item.comment}}</span>
          </li>
        </ul>
      </div>
      <div class="comment-publish">
        <!-- if no login -->
        <div class="no-login"
             v-if="user==''">
          您还没有登陆，请登录后发表评论！
        </div>
        <!-- if login -->
        <div class="has-login"
             v-else>
          <textarea class="text"
                    cols="30"
                    rows="10"
                    placeholder="请填写评论"
                    v-model="comment"></textarea>
          <button type="button"
                  class="commit-btn"
                  @click="commitComment">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'detail',
  props: [''],
  data () {
    return {
      comment: '',
      cdetail: this.$store.state.currentDetail
    }
  },

  components: {},

  computed: {
    user () {
      return this.$store.state.user
    }
  },

  mounted () {

  },

  methods: {
    showLi: function () {
      this.$router.go(-1)
    },
    commitComment () {
      this.$http.post('/auth/comment', {
        id: this.cdetail._id,
        comment: {
          comment: this.comment,
          time: '19951120',
          user: this.user
        }
      })
        .then((res) => {
          if (res.data.success) {
            this.$store.commit('changeCDetail', {
              detail: res.data.data
            })
            this.cdetail = res.data.data
            this.comment = ''
            alert(res.data.info)
          } else {
            alert(res.data.info)
          }
        }).catch((err) => {
          alert('数据库出错')
        });
    }
  },

  watch: {
  }

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
