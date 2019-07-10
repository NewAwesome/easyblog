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
          <td>{{item._id}}</td>
          <td>{{item.username}}</td>
          <td>{{item.password}}</td>
          <td>{{item.isadmin}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <button class="add-user"
            type="button">添加用户</button> -->
    <v-pagination :allData="userList"
                  :isAsync="true"
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
      userList: [],
      currentData: []
    }
  },

  components: {
    vPagination: vPagination
  },

  computed: {},

  created () {
    this.$http.get('/manage/usrList')
      .then((res) => {
        if (res.data.success) {
          this.userList = res.data.data
        }
      })
  },

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
