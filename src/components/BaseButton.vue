<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  props: [''],
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
button {
  cursor: pointer;
  color: #fff;
  padding: 10px 60px;
  border-radius: 5px;
  background: #367fc9;
  border: 1px solid #367fc9;
}
</style>
