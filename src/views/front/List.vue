<template>
  <div class="blog-container">
    <ul class="blog-list"
        v-show="info==''">

      <li class="blog-li"
          v-for="(item, index) in currentPage"
          :key="index">
        <h1>{{item.title}}</h1>
        <h2>{{item.description}}</h2>
        <div class="blog-li-btm">
          <div class="left">
            <span class="author">{{item.user}}</span>
            <span class="separate"></span>
            <span class="cate">{{item.category}}</span>
            <span class="separate"></span>
            <span class="time">{{item.addtime}}</span>
          </div>
          <div class="right">
            <span>阅读数 <span>{{item.num}}</span></span>
            <span class="separate"></span>
            <span>评论数 <span>{{item.comment.length}}</span></span>
          </div>
        </div>
        <div class="to-detail">
          <a @click="showDetail(item)">查看详情>></a>
        </div>
      </li>

      <div class="pagination">
        <v-pagination :allData="currentList"
                      :isAsync="true"
                      @update-data="pageData"></v-pagination>
      </div>
    </ul>
    <h3 v-show="info!=''">{{info}}</h3>
  </div>
</template>

<script>
import vPagination from '../../components/Pagination'

export default {
  name: '',
  props: [''],
  data () {
    return {
      // 当前分类下的全部数据
      currentList: [],
      // 当前分页下的数据
      currentPage: [],
      currentId: '-1',
      info: ''
    }
  },

  components: { vPagination: vPagination },

  computed: {},

  created () {
    this.currentId = this.$route.params.id
    this.$http.get('/auth/specCatList', {
      params: {
        id: this.currentId
      }
    })
      .then((res) => {
        if (res.data.success) {
          this.currentList = res.data.data
        } else {
          this.info = res.data.info
        }
      }, (err) => {
        this.info = '数据库连接错误'
      })
  },

  beforeMount () { },

  mounted () {
  },

  methods: {
    showDetail: function (item) {
      this.$store.commit('changeCDetail', {
        detail: item
      })
      this.$router.push('/home/detail')
    },
    pageData (val) {
      this.currentPage = val
    }
  },

  watch: {
    '$route.params' (to, from) {
      this.currentId = this.$route.params.id
      this.$http.get('/auth/specCatList', {
        params: {
          id: this.currentId
        }
      })
        .then((res) => {
          if (res.data.success) {
            this.currentList = res.data.data
            this.info = ''
          } else {
            this.currentList = []
            this.info = res.data.info
          }
        }, (err) => {
          this.info = '数据库连接错误'
        })
    }
  }

}

</script>
<style lang='scss' scoped>
.blog-container {
  padding: 30px;
}
.blog-list {
  // overflow: scroll;
  > .blog-li {
    position: relative;
    overflow: hidden;
    padding: 10px 20px;
    border: 1px solid #eae8ea;
    border-radius: 10px;
    box-shadow: 0 5px 3px 2px #eeeeee;
    margin-bottom: 30px;
    > h1 {
      font-size: 20px;
      margin-bottom: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > h2 {
      font-weight: normal;
      font-size: 14px;
      color: #8a8a8a;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > .blog-li-btm {
      font-size: 12px;
      color: #8a8a8a;
      .separate {
        height: 10px;
        background: #e0e0e0;
        width: 2px;
        display: inline-block;
        margin: 0 8px;
      }
      > .left {
        float: left;
        > .author {
          color: #333;
        }
      }
      > .right {
        float: right;
        margin-right: 80px;
        > span {
          > span {
            color: #157dcf;
          }
        }
      }
    }
    > .to-detail {
      position: absolute;
      bottom: 10px;
      right: 10px;
      cursor: pointer;
      > a {
        text-decoration: underline;
        color: #fff;
      }
    }
    &:hover {
      color: #fff;
      background: #157dcf;
      span,
      > h2 {
        color: #fff !important;
      }
      .separate {
        background: #649cc7;
      }
    }
  }
}
</style>
