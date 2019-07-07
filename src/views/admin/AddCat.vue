<template>
  <div>
    <h3>分类名称</h3>
    <input type="text"
           placeholder="请输入分类名称">
    <base-button @click.native="addCat">新增分类</base-button>
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
    addCat () {
      // 先进行对分类的增加操作，后跳转即可
      this.$router.push('/admin/category')
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
