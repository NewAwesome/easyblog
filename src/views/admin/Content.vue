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
            <td>{{item.category}}</td>
            <td>{{item.user}}</td>
            <td>{{item.addtime}}</td>
            <td>{{item.num}}</td>
            <td>
              <router-link :to="{path:'/admin/content/editCon',query:{id:item.id}}">修改</router-link> | <i @click="modalDelete(index)">删除</i>
            </td>
          </tr>
        </tbody>
      </table>
      <base-button @click.native="routeToAdd">新增博文</base-button>
      <v-pagination :allData="allData"
                    :isAsync="true"
                    @updateData="pageData"></v-pagination>
    </div>
    <router-view v-else></router-view>
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
      allData: [],
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
    'v-pagination': vPagination,
    'modal-delete': ModalDelete
  },

  created () {
    this.$http.get('/manage/conList')
      .then((res) => {
        if (res.data.success) {
          this.allData = res.data.data
        }
      })
  },
  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {
    modalDelete (index) {
      this.showDialog = true
      this.$refs.dialog.confirm().then(() => {
        this.showDialog = false
        this.currentData.splice(index, 1)
      }).catch(() => {
        this.showDialog = false
      })
    },
    pageData (val) {
      this.currentData = val
    },
    routeToAdd () {
      this.$router.push('/admin/content/addCon')
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
