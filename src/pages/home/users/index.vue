<template>
    <div class="users-container">
        <p class="dee">欢迎:{{userinfo.username}}</p>
        <p class="dee">欢迎Vuex:{{$store.state.userInfoX.username}}</p>
        <el-button type="danger" size="mini" class="de" @click=logout()>退出登录</el-button>
      <el-table
    :data="usersData"
    border
    style="width: 80%">
    <el-table-column
      prop="id"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="role_name"
      label="角色">
    </el-table-column>
     <el-table-column
      prop="mg_state"
      label="状态">
      <template slot-scope="scope">
        <el-button  size="mini" :type="scope.row.mg_state ? 'success':'danger'"  >
            {{scope.row.mg_state ? '已启用':'已禁用'}}
        </el-button>
      </template>
    </el-table-column>
    
  </el-table>
    </div>
</template>

<script>
// import axios from 'axios'
import {users} from '@/api'
  export default {
    data() {
      return {
        usersData:[],
        userinfo:{}
      }
    },
    created() {
        this.getUsers() //调用后台用户数据
        this.userinfo = JSON.parse(localStorage.getItem('userinfo') || {} ) //获取userinfo字符串
        console.log(this.userinfo);
        
    },
    methods:{
        // getUsers(){  //调用后台用户数据
        //     var token = localStorage.getItem('token') //获取token
        //     axios.get('http://127.0.0.1:8888/api/private/v1/users',{
        //         headers: {'Authorization': token},  //设置token
        //         params:{   //get的传参方式
        //             pagenum:1,
        //             pagesize:10
        //         }
        //     }).then(res=>{
        //         //   console.log(res.data.data.users);
        //           if(res.data.meta.status==200){
        //               this.usersData=res.data.data.users  //将后台数据存入usersData
        //           }else{

        //           }
        //     })
        // }
       

          getUsers(){  //调用后台用户数据
            users(1,10).then(res=>{
                //   console.log(res.data.data.users);
                  if(res.data.meta.status==200){
                      this.usersData=res.data.data.users  //将后台数据存入usersData
                  }else{

                  }
            })
        },
        logout(){  //退出登录
            localStorage.removeItem('token') //清除token
            this.$router.push('/login')  //调回登录页面
             this.$message({        //弹框
              message: "退出成功",
              type: "success",
              center: true
            });
        }
    }
  }
</script>

<style lang="less" scoped>
.de{
float:right;
margin: 15px 50px 0 0;
}
.dee{
text-align: right;
margin: 15px 50px 0 0;
}
.users-container{
    margin-left: 100px;
}
</style>
