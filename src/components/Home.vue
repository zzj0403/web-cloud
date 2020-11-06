<template>
  <el-container class="Home-container">
    <!-- 头部区域 -->
    <el-header>
      <div><span>项目管理系统</span></div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体区域 -->
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>一</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item>
              <i class="el-icon-location"></i>
              <span>二</span>
            </el-menu-item>

          </el-submenu>
        </el-menu>

      </el-aside>
      <!-- 右侧边栏区域 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    methods: {
      logout () {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
  .Home-container {
    height: 100%;
  }

  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
  }

  .el-aside {
    background-color: #333744;
  }

  .el-main {
    background-color: #eaedf1;
  }
</style>
