<template>
  <div class="tb-container">
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <td>用户ID</td>
          <td>用户名</td>
          <td>密码</td>
          <td>是否为管理员</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in currentData"
            :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.password}}</td>
          <td>{{item.isAdmin}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <button class="add-user"
            type="button">添加用户</button> -->
    <v-pagination :allData="userList"
                  @updateData="pageData"></v-pagination>
  </div>
</template>

<script>

import vPagination from '../../components/Pagination'
export default {
  name: '',
  props: [''],
  data () {
    return {
      userList: [
        {
          id: 1,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 2,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 3,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 4,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 5,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 6,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 7,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 8,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 9,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 10,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 11,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 12,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 13,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 14,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 15,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }, {
          id: 16,
          name: 'admin',
          password: 'admin',
          isAdmin: true
        }
      ],
      currentData: []
    }
  },

  components: {
    vPagination: vPagination
  },

  computed: {},

  beforeMount () { },

  mounted () { },

  methods: {
    pageData: function (val) {
      this.currentData = val
    }
  },

  watch: {}

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
    }
  }
  // .add-user {
  //   cursor: pointer;
  //   color: #fff;
  //   flex: 1;
  //   padding: 10px 60px;
  //   border-radius: 5px;
  //   background: #367fc9;
  //   border: 1px solid #367fc9;
  // }
}
</style>
