<template>
  <el-menu
      :default-active="defaultActive"
      mode="horizontal"
      @select="handleSelect"
      :router="router"
      v-if="!isMobile"
  >
    <!-- 导航栏项 -->
    <el-menu-item style="margin-left:5%; margin-right: 42%" class="nav-logo" v-if="this.largeScreen">
<!--      <img :src="logoPath" alt="公司logo" class="logo-image">-->
      <span class="company-name">雷目智能科技有限公司</span>
    </el-menu-item>
    <el-menu-item style="margin-left:5%; margin-right: 30%" class="nav-logo" v-else>
      <!--      <img :src="logoPath" alt="公司logo" class="logo-image">-->
      <span class="company-name">雷目智能科技有限公司</span>
    </el-menu-item>
<!--    <el-menu-item class="menu-item" index="/" >首页 </el-menu-item>-->
<!--    <el-menu-item class="menu-item" index="/products">产品中心</el-menu-item>-->
<!--    <el-menu-item class="menu-item" index="/cases" >行业案例</el-menu-item>-->
<!--    <el-menu-item class="menu-item" index="/aboutus" >走进雷目</el-menu-item>-->
<!--    <el-menu-item class="menu-item" index="/news" >公司新闻</el-menu-item>-->
<!--    <el-menu-item class="menu-item" index="/contactus" >联系我们</el-menu-item>-->
<!--    <el-menu-item class="menu-item" index="/jobs" >人才招聘</el-menu-item>-->
  </el-menu>
  <el-collapse v-else>
<!--    <img :src="logoPath" alt="公司logo" class="logo-image">-->
    <el-collapse-item title="雷目智能科技有限公司" icon="el-icon-menu">
      <el-menu
          mode="vertical"
          @select="handleSelect"
          :router="router"
      >
        <!-- 导航栏项 -->
        <el-menu-item index="/" style="font-size: 1rem">首页</el-menu-item>
        <el-menu-item index="/news" style="font-size: 1rem">新闻资讯</el-menu-item>
        <el-menu-item index="/product" style="font-size: 1rem">产品中心</el-menu-item>
        <el-menu-item index="/case" style="font-size: 1rem">经典案例</el-menu-item>
        <el-menu-item index="/goin" style="font-size: 1rem">走进雷目</el-menu-item>
        <el-menu-item index="/download" style="font-size: 1rem">关于我们</el-menu-item>
      </el-menu>
    </el-collapse-item>
  </el-collapse>
</template>

<script>


export default {
  data() {
    return {
      isMobile: false,
      router: true,
      logoPath: require('@/assets/img/雷目智能科技有限公司2.png'),
      screenWidth: 0,
      screenHeight: 0,
      breakpoint: 1921, // 设定断点宽度
      largeScreen: false
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
    this.getScreenSize();
    window.addEventListener('resize', this.getScreenSize);
    if (this.screenWidth >= this.breakpoint)
    {
      this.largeScreen = true
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.checkMobile);
  },
  computed () {
  },
  methods: {
    toggleDrawer() {
      // 实现移动端点击展开导航栏的功能
      // 可以使用Vuex或Vue的响应式数据来控制导航栏的展开与收起
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    handleSelect() {
      // 处理导航项选择事件

    },
    getScreenSize() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    }
  },
};
</script>


<style scoped>
.menu-item {
  font-size: 1.5rem;
  transform: scaleY(1.1);
}
.nav-logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 260px;
  height: 60px;
  margin-right: 8px;
}

.company-name {
  background: linear-gradient(to right, #1a93a8, #31d4d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  transform: scaleY(1.1);
}
</style>