<template>
  <div>
    <form action=""
          v-if="!isReg&&!hasLogin">
      <h3>欢迎登陆</h3>
      <div class="tag">
        <span>用户名</span>
        <input class="u-input"
               type="text"
               v-model="name">
      </div>
      <div class="tag">
        <span>密码</span>
        <input class="u-input"
               type="text"
               v-model="password">
      </div>
      <div class="btns"> <button class="btn"
                type="button"
                @click="login()">登陆</button>
        <button class="btn"
                type="button"
                @click="reg()">注册</button></div>
    </form>
    <form action=""
          v-else-if="isReg&&!hasLogin">
      <h3>请输入以下信息</h3>
      <div class="tag">
        <span>用户名</span>
        <input class="u-input"
               type="text"
               v-model="name">
      </div>
      <div class="tag">
        <span>密码</span>
        <input class="u-input"
               type="password"
               v-model="password">
      </div>
      <div class="tag">
        <span>确认密码</span>
        <input class="u-input"
               type="password"
               v-model="repeat">
      </div>
      <div class="btns">
        <button class="btn"
                type="button"
                @click="addUser()">确定</button>
        <button class="btn"
                type="button"
                @click="cancel()">取消</button>
      </div>
    </form>
    <div class="welcome"
         v-else>
      <p>{{name}}</p>
      <h2>欢迎您</h2>
      <div class="btnsLogined">
        <base-button @click.native="goAdmin">管理博客</base-button>
        <base-button @click.native="quit">注销</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
export default {
  name: 'UserMp',
  props: [''],
  data () {
    return {
      isReg: false,
      hasLogin: false,
      name: '',
      password: '',
      repeat: ''
    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () {
    const token = sessionStorage.getItem('demo-token')
    if (token !== 'null' && token !== null) {
      // alert('token存在')
      this.name = jwt.decode(token).name
      this.hasLogin = true
    }
  },

  methods: {
    login () {
      let obj = {
        name: this.name,
        password: this.password
      }
      this.$http.post('/auth/user', obj)
        .then((res) => {
          if (res.data.success) {
            // 如果成功了
            sessionStorage.setItem('demo-token', res.data.token)
            this.name = jwt.decode(res.data.token).name
            this.hasLogin = true
            // vuex
            this.$store.commit('changeUser', {
              username: this.name
            })
          } else {
            // 登陆失败
            alert(res.data.info)
            sessionStorage.setItem('demo-token', null) // 将token清空
          }
        }, (err) => {
          // 请求错误
          alert(res.data.info)
          sessionStorage.setItem('demo-token', null) // 将token清空
        })

      // old
      // if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
      //   // store.commit("setUser", this.name)
      //   // this.name = ''
      //   // this.password = ''
      //   this.hasLogin = true
      // } else {
      //   alert('用户名或密码不正确！！')
      // }
    },
    reg () {
      this.isReg = true
    },
    addUser () {
      if (this.password === this.repeat) {
        let obj = {
          username: this.name,
          password: this.password,
          isadmin: false
        }
        this.$http.post('/auth/user/register', obj)
          .then((res) => {
            if (res.data.success) {
              alert(res.data.info)
              this.name = ''
              this.password = ''
              this.repeat = ''
              this.isReg = false
            } else {
              alert(res.data.info)
            }
          })
        // localStorage.setItem('name', this.name)
        // localStorage.setItem('password', this.password)

      } else {
        alert('两次输入的密码不一致')
      }
    },
    cancel () {
      this.isReg = false
    },
    goAdmin () {
      this.$router.push('/admin')
    },
    quit () {
      this.hasLogin = false
      this.name = ''
      this.password = ''
      this.repeat = ''
      // vuex
      this.$store.commit('changeUser', {
        username: ''
      })
      // 清空sessionStorage
      sessionStorage.setItem('demo-token', null)
    }
  },

  watch: {}

}

</script>
<style lang='scss' scoped>
h3 {
  margin: 30px 0 30px 40px;
  font-size: 16px;
}
.tag {
  display: flex;
  font-weight: 500;
  justify-content: space-around;
  padding: 0 20px;
  margin-bottom: 10px;
  > span {
    flex: 1;
    text-align: right;
    height: 35px;
    line-height: 35px;
    margin-right: 20px;
  }
  > input {
    display: inline-block;
    flex: 200px;
    height: 35px;
  }
}
.u-input {
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid #eae8ea;
}

.btns {
  display: flex;
  padding: 20px;
  margin-bottom: 10px;
  > .btn {
    cursor: pointer;
    color: #fff;
    flex: 1;
    padding: 10px 60px;
    border-radius: 5px;
    background: #367fc9;
    border: 1px solid #367fc9;
  }
  > .btn:nth-child(2) {
    margin-left: 10px;
    color: #367fc9;
    background: #fff;
  }
}
.welcome {
  height: 260px;
  padding: 50px 0;
  box-sizing: border-box;
  text-align: center;
  > p {
    font-size: 26px;
    color: #367fc9;
    margin-top: 10px;
  }
  > h2 {
    margin-bottom: 40px;
  }
  > button {
    display: block;
    margin: 0 auto;
  }
}
.btnsLogined {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
</style>
