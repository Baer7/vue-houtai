<template>
    <div class="login-container" >
        <h1 class="Login">登录</h1>
        <el-form ref="form" :model="form" label-width="80px" >
  <el-form-item label="用户名:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="密码:">
    <el-input v-model="form.password" type="password"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style  lang="less" >
    .login-container{
         width: 500px;
         margin: 150px auto;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          padding: 50px;
         .el-button{
             width: 100%;
             
         }
         .Login{
             text-align: center;
             font-weight: 700;
             font-size: 24px;
             margin:0px 0 20px;
         }
    }
</style>
