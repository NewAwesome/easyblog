<template>
  <div class="admin-container"
       ref="container">
    <dl class="left">
      <!-- dt+div start -->
      <div class="ul-contain"
           v-for="(item, index) in navList"
           :key="index">
        <dt class="active"
            @click="spread($event)">{{ index }}<i class="fa fa-angle-down"></i></dt>
        <div class="stretch active">
          <router-link v-for="(itemm, indexm) in item"
                       @click="routeTo(indexm)"
                       :key="indexm"
                       :to="indexm"
                       tag="dd"
                       active-class='active'
                       :class="{'active':activeLi===index}">{{itemm}}</router-link>
        </div>
      </div>
      <!-- dt+div end -->
    </dl>
    <div class="right">
      <div class="breadcrump">
        <span v-for="(obj, indexb) in items=this.$route.matched.map(item => item.path)"
              :key="indexb">
          <router-link :to="obj"
                       :class="{'able':indexb!==(items.length-1)}">{{breadcrumpMatch[obj]}}</router-link><span v-if="indexb!==items.length-1">/</span>
        </span>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'admin',
  props: [''],
  data () {
    return {
      // 渲染左侧导航列表。v-for双层循环
      navList: {
        '后台管理': {
          '/admin/user': '用户管理',
          '/admin/category': '分类管理',
          '/admin/content': '博文管理'
        },
        '后台管理2': {
          '/admin/user': '用户管理',
          '/admin/category': '分类管理',
          '/admin/content': '博文管理'
        }
      },
      // 表示对应当前路由的li元素下标，用于给与active
      activeLi: '',
      // 配合activeLi使用，在watch中将路径转换为下标值
      navMatch: {
        '/admin/user': 1,
        '/admin/category': 2,
        '/admin/category/add': 2,
        '/admin/content': 3,
        '/admin/content/add': 3
      },
      // 面包屑导航的路径名：中文名
      breadcrumpMatch: {
        '/admin/user': '用户管理',
        '/admin/category': '分类管理',
        '/admin/category/addCat': '添加分类',
        '/admin/content': '博文管理',
        '/admin/content/addCon': '添加博文',
        '/admin': '管理首页'
      }
    }
  },

  components: {},

  computed: {},

  beforeMount () { },

  mounted () {
    const cHeight = document.documentElement.clientHeight
    this.$refs.container.style.cssText += 'height:' + cHeight + 'px;'
    // 路由及导航
    console.log(this.$route.params)
  },

  methods: {
    spread: function (event) {
      event.currentTarget.classList.toggle('active')
      let el = event.currentTarget.nextSibling || event.currentTarget.nextElementSibling
      el.classList.toggle('active')
    }
  },

  watch: {
    '$route' (to, from) {
      this.activeLi = this.navMatch[to.matched[1].path] - 1
    }
  }

}

</script>
<style lang='scss' scoped>
.admin-container {
  background: #fff;
  display: flex;
  > .left {
    width: 300px;
    height: 100%;
    border-right: 1px solid #d3d3d3;
    font-size: 14px;

    .stretch > dd {
      cursor: pointer;
      &:hover {
        background: #95bbd6;
      }
      &.active {
        font-weight: 600;
        color: #337ab7;
        background: #95bbd6;
      }
    }
    dt {
      cursor: pointer;
      padding: 20px 20px;
      background: #fff;
      transition: all 0.5s linear;
      > i {
        transition: all 0.5s linear;
        font-size: 18px;
        float: right;
      }
      &.active {
        background: #b1d7f3;
        > i {
          color: #333;
          transform: rotate(180deg);
        }
      }
    }
    .stretch > dd {
      padding: 15px 20px;
      padding-left: 50px;
    }
    .stretch {
      max-height: 0;
      overflow: hidden;
      transition: all 0.5s linear;
      &.active {
        transition: all 0.5s linear;
        max-height: 300px;
      }
    }
  }
  > .right {
    flex: 1;
    float: right;
    height: 100%;
    > .breadcrump {
      width: 100%;
      height: 60px;
      background: #ededed;
      line-height: 60px;
      box-sizing: border-box;
      padding-left: 10px;
      a {
        text-decoration: none;
        margin: 0 5px;
        font-size: 14px;
        cursor: default;
        color: #747474;
        &.able {
          color: #337ab7;
          cursor: pointer;
        }
      }
      span {
        color: #c2c2c2;
      }
    }
    > .content {
    }
  }
}
</style>
