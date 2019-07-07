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
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.category}}</td>
            <td>{{item.author}}</td>
            <td>{{item.time}}</td>
            <td>{{item.reading}}</td>
            <td>
              <router-link :to="{path:'/admin/content/editCon',query:{id:item.id}}">修改</router-link> | <i @click="modalDelete(index)">删除</i>
            </td>
          </tr>
        </tbody>
      </table>
      <base-button @click.native="routeToAdd">新增博文</base-button>
      <v-pagination :allData="allData"
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
      allData: [
        {
          id: 1,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        },
        {
          id: 2,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        },
        {
          id: 3,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        },
        {
          id: 4,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        },
        {
          id: 5,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        },
        {
          id: 6,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 7,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 8,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 9,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 10,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 11,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 12,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 13,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 14,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 15,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 16,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 17,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }, {
          id: 18,
          title: '鲁滨逊漂流记',
          category: '3',
          author: 'admin',
          time: '2019-11-20',
          reading: '110'
        }
      ],
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
