<template>
  <div>
    <h3>分类名称</h3>
    <input type="text"
           v-model="catname"
           placeholder="请输入分类名称">
    <base-button @click.native="addCat">新增分类</base-button>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['catData'],
  data () {
    return {
      catname: ''
    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {
    addCat () {
      this.$http.post('/manage/addCat', {
        name: this.catname
      })
        .then(res => {
          if (res.data.success) {
            // emit
            this.$emit('add-cat', res.data.data)
            // 清空输入框
            this.catname = ''
            // 先进行对分类的增加操作，后跳转即可
            this.$router.push('/admin/category')
          } else {
            alert(res.data.info)
          }
        })

    }
  },

  watch: {}

}

</script>
<style lang='scss' scoped>
input {
  display: block;
  margin: 0 auto;
  width: 90%;
  border: 1px solid rgb(160, 160, 160);
  border-radius: 3px;
  height: 35px;
  padding: 0 5px;
  margin-bottom: 20px;
}
</style>
