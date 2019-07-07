<template>
  <div>
    <h3>分类名称</h3>
    <input type="text"
           :value="$route.query.id">
    <div class="btns">
      <base-button @click.native="confirmEdit">修改分类</base-button>
      <base-button @click.native="cancel">取消</base-button>
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
    confirmEdit () {
      // 先进行对分类的修改操作，后跳转即可
      this.$router.push('/admin/category')
    },
    cancel () {
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
.btns {
  display: flex;
  justify-content: center;
  > button:nth-child(1) {
    margin-right: 20px;
  }
}
</style>
