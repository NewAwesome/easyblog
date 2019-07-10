<template>
  <ul class="pag">
    <li class="prev"
        @click="prev"
        :class="{'unactive':currentPage===1}">上一页</li>
    <li v-for="n in pageNum"
        :key="n"
        :class="{'active':n===currentPage}"
        @click="pageTo(n)">{{n}}</li>
    <li class="next"
        @click="next"
        :class="{'unactive':currentPage===pageNum}">下一页</li>
  </ul>
</template>

<script>

export default {
  name: 'vPagination',
  // 第二个prop值为true时表示数据是异步获取的。false时表示同步数据
  props: ['allData', 'isAsync'],
  data () {
    return {
      numPerPage: 5,
      pageNum: 0,
      currentData: [],
      currentPage: 1
    }
  },

  components: {},

  computed: {
  },

  beforeMount () {
    if (!this.isAsync) {
      let len = this.allData.length
      this.pageNum = Math.ceil(len / this.numPerPage)
      for (let i = (this.currentPage - 1) * this.numPerPage; i < this.currentPage * this.numPerPage; i++) {
        this.currentData.push(this.allData[i])
      }
    }
  },

  mounted () {
    if (!this.isAsync) {
      this.$emit('updateData', this.currentData)
    }
  },

  methods: {
    prev () {
      if (this.currentPage !== 1) {
        this.currentPage--
      }
    },
    next () {
      if (this.currentPage !== this.pageNum) {
        this.currentPage++
      }
    },
    pageTo (n) {
      this.currentPage = n
    }
  },

  watch: {
    currentPage: function (val) {
      let arr = []
      for (let i = (this.currentPage - 1) * this.numPerPage; i < this.currentPage * this.numPerPage && i < this.allData.length; i++) {
        arr.push(this.allData[i])
      }
      this.currentData = arr
      this.$emit('updateData', this.currentData)
    },
    // 监听父组件传来的数据，发生变化时就是父组件ajax拿到数据时
    allData: function () {
      let len = this.allData.length
      this.pageNum = Math.ceil(len / this.numPerPage)
      this.currentData = []
      for (let i = (this.currentPage - 1) * this.numPerPage; i < this.currentPage * this.numPerPage && i < this.allData.length; i++) {
        this.currentData.push(this.allData[i])
      }
      this.$emit('updateData', this.currentData)
    }
  }

}

</script>
<style lang='scss' scoped>
.pag {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  > li {
    cursor: pointer;
    padding: 5px 15px;
    border: 1px solid #367fc9;
    &:hover {
      background: #367fc9;
      color: #fff;
    }
    &.active {
      background: #367fc9;
      color: #fff;
    }
    &.unactive {
      cursor: default;
      color: rgb(139, 139, 139);
      pointer-events: none;
    }
  }
  > li + li {
    border-left: none;
  }
}
</style>
