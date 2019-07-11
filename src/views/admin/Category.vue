<template>
  <div class="tb-container">
    <div v-if="routeFlag">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <td>分类ID</td>
            <td>分类名称</td>
            <td>分类操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in currentData"
              :key="index">
            <td>{{item._id}}</td>
            <td>{{item.name}}</td>
            <td>
              <router-link :to="{path:'/admin/category/editCat',query:{id:item._id,name:item.name}}">修改</router-link> | <i @click="modalDelete(index,item)">删除</i>
            </td>
          </tr>
        </tbody>
      </table>
      <base-button @click.native="routeToAdd">新增分类</base-button>
    </div>
    <router-view v-else
                 :catData="currentData"
                 @edit-cat="editCat"
                 @add-cat="addCat"></router-view>
    <modal-delete v-show="showDialog"
                  :dialog-option="dialogOption"
                  ref="dialog">
    </modal-delete>
  </div>
</template>

<script>
import ModalDelete from '../../components/ModalDelete'
export default {
  name: '',
  props: [''],
  data () {
    return {
      routeFlag: true,
      currentData: [],
      showDialog: false,
      dialogOption: {
        title: '删除确认',
        text: '请问您是否确认要删除？',
        cancelButtonText: '不了',
        confirmButtonText: '确认'
      }
    }
  },

  components: {
    'modal-delete': ModalDelete
  },

  computed: {},
  created () {
    this.$http.get('/manage/catList')
      .then((res) => {
        if (res.data.success) {
          this.currentData = res.data.data
        }
      })
  },
  beforeMount () { },

  mounted () { },

  methods: {
    modalDelete (index, item) {
      this.showDialog = true
      this.$refs.dialog.confirm().then(() => {
        this.showDialog = false
        // 后台删除
        this.$http.post('/manage/deleteCat', {
          id: item._id
        })
          .then(res => {
            if (res.data.success) {
              // 前台删除
              this.currentData.splice(index, 1)
            } else {
              alert('删除失败')
            }
          })
      }).catch(() => {
        this.showDialog = false
      })
    },
    routeToAdd () {
      this.$router.push('/admin/category/addCat')
    },
    // 子组件edit后 触发自定义事件
    editCat (params) {
      for (let item of this.currentData) {
        if (item._id == params.id) {
          item.name = params.name
          break
        }
      }
    },
    addCat (params) {
      this.currentData.push(params)
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path !== '/admin/category') {
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
</style>
