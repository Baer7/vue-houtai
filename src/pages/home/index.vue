<template>
    <div class="home-container">
<el-row class="tac">
    <!-- 左边区域 -->
    <!-- @select设置index=1-1的打印输出 -->
    <!-- default-active="1-1" //默认active高亮 -->
  <el-col :span="4">
    <el-menu
      :default-active='activeindex'
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"

      @select="handSelect"  >
      
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">角色管理</el-menu-item>
          <el-menu-item index="1-2">权限管理</el-menu-item>
        </el-menu-item-group>
     
      </el-submenu>
    <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">第一</el-menu-item>
          <el-menu-item index="2-2">第二</el-menu-item>
        </el-menu-item-group>
     
      </el-submenu>
    </el-menu>
  </el-col>
  <!-- 右边区域 -->
    <el-col :span="20">
        <router-view></router-view>
    </el-col>
</el-row>
    </div>
</template>


<script>
export default {
    data(){
        return{
            activeindex: '1-1'
        }
    },
  methods: {
      
    handSelect(key, keyPath) {  //@select设置index=1-1的打印输出
      console.log(key, keyPath);
        // switch(key){
        //     case '1-1': //右边区域跳转到1-1
        //     this.$router.push({path:'/home/users'})
        //     // this.activeindex = '1-1'
        //     // case '1-2':
        //     // this.$router.push({path:'/home/users2'})
        //     break;
        // }
        if(key=='1-1'){
             this.$router.push({path:'/home/users'})
        }else if(key=='1-2'){
            this.$router.push({path:'/home/users2'})
        }else if(key=='2-1'){
            this.$router.push({path:'/home/users3'})
        }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style lang="less" scoped>
  .el-menu{
        border-right: none;
    }
</style>
