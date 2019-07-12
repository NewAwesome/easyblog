<template>
  <div class="tb-container">
    <div v-if="routeFlag">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <td>博文ID</td>
            <td>博文标题</td>
            <td>所属分类</td>
            <td>作者</td>
            <td>添加时间</td>
            <td>阅读量</td>
            <td>博文增删</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in currentData"
              :key="index">
            <td>{{item._id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.catName}}</td>
            <td>{{item.user}}</td>
            <td>{{item.addtime}}</td>
            <td>{{item.num}}</td>
            <td>
              <router-link :to="{path:'/admin/content/editCon',query:{id:item._id}}">修改</router-link> | <i @click="modalDelete(index,item)">删除</i>
            </td>
          </tr>
        </tbody>
      </table>
      <base-button @click.native="routeToAdd">新增博文</base-button>
      <v-pagination :allData="allData"
                    :isAsync="true"
                    npp="5"
                    @update-data="pageData"
                    @receive-page-info="pageInfo"></v-pagination>
    </div>
    <router-view v-else
                 :catData="catList"
                 :conData="allData"
                 @edit-con="editCon"
                 @add-con="addCon"></router-view>
    <modal-delete v-show="showDialog"
                  :dialog-option="dialogOption"
                  ref="dialog">
    </modal-delete>
  </div>
</template>

<script>
import ModalDelete from '../../components/ModalDelete'
import vPagination from '../../components/Pagination'
export default {
  name: '',
  props: [''],
  data () {
    return {
      routeFlag: true,
      // 全部数据
      allData: [],
      // 当前分页下的数据
      currentData: [],
      // 分页信息
      currentPage: '',
      numPerPage: '',
      // ajax获取到的类型表
      catList: [],
      // 删除模态框
      showDialog: false,
      dialogOption: {
        title: '删除确认',
        text: '请问您是否确认要删除？',
        cancelButtonText: '不了',
        confirmButtonText: '确认'
      },
    }
  },
  components: {
    'v-pagination': vPagination,
    'modal-delete': ModalDelete
  },

  created () {
    // this.$http.get('/manage/conList')
    //   .then((res) => {
    //     if (res.data.success) {
    //       this.allData = res.data.data
    //     }
    //     this.$http.get('/manage/catList')
    //       .then((res) => {
    //         if (res.data.success) {
    //           this.catList = res.data.data
    //         }
    //         // 对allData进行处理，每个数组元素插入属性值：catName
    //         this.allData.forEach((item, index) => {
    //           this.catList.some(cat => {
    //             if (item.category == cat._id) {
    //               item.catName = cat.name
    //               return true
    //             }
    //           })
    //         })
    //       })
    //   })

    // 使用promise.all
    let pro1 = this.$http.get('/manage/conList')
    let pro2 = this.$http.get('/manage/catList')
    Promise.all([pro1, pro2])
      .then(res => {
        if (res[0].data.success) {
          this.allData = res[0].data.data
        }
        if (res[1].data.success) {
          this.catList = res[1].data.data
        }
        // 对allData进行处理，每个数组元素插入属性值：catName
        this.allData.forEach((item, index) => {
          this.catList.some(cat => {
            if (item.category == cat._id) {
              item.catName = cat.name
              return true
            }
          })
        })
      })
  },
  computed: {},

  beforeMount () { },

  mounted () {
  },

  methods: {
    modalDelete (index, item) {
      this.showDialog = true
      this.$refs.dialog.confirm().then(() => {
        this.showDialog = false
        // 后台删除
        this.$http.post('/manage/deleteCon', {
          id: item._id
        })
          .then(res => {
            if (res.data.success) {
              // 前台删除
              // 先处理一下index
              index += (this.currentPage - 1) * this.numPerPage
              this.allData.splice(index, 1)
            } else {
              alert('删除失败')
            }
          })
      }).catch(() => {
        this.showDialog = false
      })
    },
    pageData (val) {
      this.currentData = val
    },
    pageInfo (params) {
      this.currentPage = params.currentPage
      this.numPerPage = params.numPerPage
    },
    routeToAdd () {
      this.$router.push('/admin/content/addCon')
    },
    editCon (params) {
      for (let item of this.allData) {
        if (item._id == params.id) {
          item.title = params.title
          item.category = params.category
          item.catName = params.catName
          item.description = params.description
          item.composition = params.composition
          break
        }
      }
    },
    addCon (params) {
      this.allData.push(params)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== '/admin/content') {
        this.routeFlag = false
      } else {
        this.routeFlag = true
      }
    }
  }

}

</script>
<style lang='scss' scoped>
.tb-container {
  text-align: center;
  .table {
    text-align: center;
    thead {
      font-weight: 600;
      color: #4a9ad3;
    }
    td {
      height: 40px;
      line-height: 40px;
      > a {
        padding: 0 5px;
        cursor: pointer;
      }
      > i {
        padding: 0 5px;
        cursor: pointer;
        font-style: normal;
        color: #d9534f;
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
}
button {
  margin-bottom: 20px;
}
</style>
