<template>
  <div>
    <h3>博文标题</h3>
    <input type="text"
           v-model="title"
           placeholder="请填写博文名称">
    <h3>请选择分类</h3>
    <select name=""
            v-model="category"
            class="select-cat"
            id="">
      <option v-for="(item, index) in catData"
              :key="index"
              :value="item.name">{{item.name}}</option>
    </select>
    <h3>请填写简介</h3>
    <textarea name=""
              v-model="description"
              class="text-desc"
              id=""
              cols="30"
              rows="4"
              placeholder="请输入内容简介"></textarea>
    <h3>请填写正文</h3>
    <textarea name=""
              v-model="composition"
              class="text-comp"
              id=""
              cols="30"
              rows="10"
              placeholder="请输入内容"></textarea>
    <base-button @click.native="addCon">添加博文</base-button>
  </div>
</template>

<script>

export default {
  name: '',
  props: ['conData', 'catData'],
  data () {
    return {
      // 表单绑定数据
      title: '',
      category: '',
      description: '',
      composition: '',
      catId: ''
    }
  },

  components: {},

  computed: {},
  beforeMount () { },

  mounted () {
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    this.category = this.catData[0].name
  },

  methods: {
    addCon () {
      // 先组装一下数据
      let data = {
        title: this.title,
        category: this.catId,
        num: 0,
        user: this.$store.state.user,
        comment: [],
        addtime: 20190909,
        description: this.description,
        composition: this.composition
      }
      this.$http.post('/manage/addCon', data)
        .then(res => {
          if (res.data.success) {
            // 处理一下返回值，给与一个中文类型名字段
            res.data.data.catName = this.category
            // emit
            this.$emit('add-con', res.data.data)
            // 清空输入框
            this.title = ''
            this.category = this.catData[0].name
            this.description = ''
            this.composition = ''
            // 先进行对分类的增加操作，后跳转即可
            this.$router.push('/admin/content')
          } else {
            alert(res.data.info)
          }
        })
    }
  },

  watch: {
    category: function () {
      this.catData.some((item, index) => {
        if (item.name == this.category) {
          // 设置cat id
          this.catId = item._id
          return true
        }
      })
    }
  }

}

</script>
<style lang='scss' scoped>
input {
  display: block;
  margin: 0 auto;
  width: 90%;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 6px;
  height: 35px;
  padding: 0 10px;
  margin-bottom: 20px;
}
.select-cat {
  display: block;
  margin: 0 auto;
  padding: 0 10px;
  width: 90%;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 6px;
  height: 35px;
}
.text-desc {
  display: block;
  padding: 10px 10px;
  margin: 0 auto;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 6px;
  width: 90%;
}
.text-comp {
  display: block;
  padding: 10px 10px;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 6px;
  margin: 0 auto;
  width: 90%;
}
button {
  margin-top: 20px;
}
</style>
