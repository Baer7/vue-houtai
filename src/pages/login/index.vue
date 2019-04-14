<template>
    <div class="login-container" >
        <h1 class="Login">登录</h1>
        <el-form ref="form" :model="form" label-width="80px" >
  <el-form-item label="用户名:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="密码:">
    <el-input v-model="form.password" type="password" @keyup.enter.native="SubmitLogin"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="SubmitLogin">登录</el-button>
  </el-form-item>
</el-form>
    </div>
    
</template>

<script>
// import axios from "axios";
import {login} from '@/api'


export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
       
      }
    };
  },
  methods: {
    // SubmitLogin() {
    //   axios
    //     .post("http://127.0.0.1:8888/api/private/v1/login", {
    //       username: this.form.name,
    //       password: this.form.password
    //     })
    //     .then(res => {
    //       // console.log(res.data.meta.status);状态码
          
    //       if (res.data.meta.status == 200) {
    //         // console.log(res.data.data.token);
    //         localStorage.setItem('token',res.data.data.token) //存储token
    //         this.$message({
    //           message: "登录成功",
    //           type: "success",
    //           center: true
    //         });
    //         this.$router.push("/home"); //跳转首页
    //       } else {
    //         this.$message({
    //           message: "登录失败",
    //           type: "error  ",
    //           center: true
    //         });
    //       }
    //     });
    // }

    SubmitLogin() {
      login(this.form.name,this.form.password).then(res => {
          // console.log(res.data.meta.status);状态码
          
          if (res.data.meta.status == 200) {
            // console.log(res.data.data);
            localStorage.setItem('token',res.data.data.token) //存储token
            localStorage.setItem('userinfo',JSON.stringify(res.data.data)) //存储用户信息
            this.$store.commit('addUserinfo',res.data.data)  //将数据存入Vuex中
            this.$message({
              message: "登录成功",
              type: "success",
              center: true
            });
            this.$router.push("/home"); //跳转首页
          } else {
            this.$message({
              message: "登录失败",
              type: "error  ",
              center: true
            });
          }
        });
    }


  }
};
</script>

<style  lang="less" >
.login-container {
  width: 500px;
  margin: 150px auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 50px;
  .el-button {
    width: 100%;
  }
  .Login {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    margin: 0px 0 20px;
  }
}
</style>
