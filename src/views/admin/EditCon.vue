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
    <div class="btns">
      <base-button @click.native="confirmEdit">修改博文</base-button>
      <base-button @click.native="cancel">取消</base-button>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: ['conData', 'catData'],
  data () {
    return {
      id: this.$route.query.id,
      title: '',
      category: '',
      description: '',
      composition: '',
      // 当前处理的category id
      catId: ''
    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () {
    this.conData.some((item, index) => {
      if (item._id == this.$route.query.id) {
        // 设置cat id
        this.catId = item.category
        // 设置表单待修改数据
        this.category = item.catName
        this.title = item.title
        this.description = item.description
        this.composition = item.composition
        return true
      }
    })
  },

  methods: {
    addCon () {
      this.$router.push('/admin/content')
    },
    confirmEdit () {
      this.$http.post('/manage/updateCon', {
        id: this.id,
        title: this.title,
        category: this.catId,
        description: this.description,
        composition: this.composition
      })
        .then((res) => {
          if (res.data.success) {
            // 修改成功
            // 给data加入this.catName中文分类名
            res.data.data.catName = this.category
            // 循环遍历修改前台数据
            this.$emit('edit-con', res.data.data)
            // 先进行对分类的修改操作，后跳转即可
            this.$router.push('/admin/content')

          } else {
            // 修改失败
            alert(res.data.info)
            // 先进行对分类的修改操作，后跳转即可
            // this.$router.push('/admin/category')
          }
        })
    },
    cancel () {
      this.$router.push('/admin/content')
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
.btns {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  > button:nth-child(1) {
    margin-right: 20px;
  }
}
</style>
