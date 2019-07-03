<template>
  <div class="home-nav">
    <ul class="home-nav-ul">
      <li class="home-nav-li"
          v-for="(item, index) in categories"
          :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: '',
  props: ['categories'],
  data () {
    return {

    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {},

  watch: {}

}

</script>
<style lang='scss' scoped>
.home-nav-ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > .home-nav-li {
    flex: initial;
    background: #fff;
    color: #367fc9;
    font-size: 20px;
    height: 70px;
    width: 200px;
    line-height: 70px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: #367fc9;
      color: #fff;
    }
  }
}
</style>
