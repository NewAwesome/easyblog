<template>
  <div>
    <h3>博文标题</h3>
    <input type="text"
           placeholder="请填写博文名称">
    <h3>请选择分类</h3>
    <select name=""
            class="select-cat"
            id="">
      <option v-for="(item, index) in categories"
              :key="index"
              value="">{{item.name}}</option>
    </select>
    <h3>请填写简介</h3>
    <textarea name=""
              class="text-desc"
              id=""
              cols="30"
              rows="4"
              placeholder="请输入内容简介"></textarea>
    <h3>请填写正文</h3>
    <textarea name=""
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
  props: [''],
  data () {
    return {
      categories: [
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Python'
        },
        {
          id: 3,
          name: 'PHP'
        }
      ]
    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {
    addCon () {
      this.$router.push('/admin/content')
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
