<template>
  <div class="loginBox">
    <div class="header">
      <img src="../assets/images/logo_dev.png" alt="">
      <p>后台管理系统</p>
      <div class="theme">
        <span>切换主题</span>
        <div class="right_theme">
          <ul class="list">
            <li>默认</li>
            <li>珊瑚红</li>
          </ul>
        </div>
      </div>
    </div>
   <div class="comtent_box">
     <div id="login">
     <p class="title">用户登录</p>
     <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" size="small">
      <el-form-item  prop="userName">
        <el-input v-model="ruleForm.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item  prop="passWord">
        <el-input  v-model="ruleForm.passWord"  placeholder="密码" :type="pwdActive?'password':'text'">
          <i class="iconfont pwdIcon" :class="pwdActive?'icon-eye-clouse':'icon-icon_open-eyes'" slot="suffix" @click="pwdClick"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger"  size="medium"  @click="submitForm('ruleForm')" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
   </div>
     <div class="comtent_bg">
        <img src="../assets/images/logo.png" alt="" srcset="">
      </div>
  </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      ruleForm:{
          userName: '',
          passWord: ''
      },
       rules: {
            userName: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            passWord: [
              { required: true, message: '请输入密码', trigger: 'blur' }
            ],
        },
        pwdActive:true
    }
  },
  methods:{
    pwdClick(){
     this.pwdActive = ! this.pwdActive 
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$router.push('/Main')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .loginBox{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom:0;
    display: flex;
    flex-flow: column nowrap;
    .header{
      height: 80px;
      width: 100%;
      background:#fff;
      &>img{
        height: 50px;
        float: left;
        margin: 15px 0 0 100px
      }
      &>p{
        float: left;
        margin: 40px 0 0 40px;
        font-size: 18px;
        color: #999;
      }
      &>.theme{
        float:right;
        margin: 0 100px 0 0;
        position: relative;
        &:hover{
          .right_theme{
            display: block!important;
            .list{
              li{
                display: block;
                padding: 5px 0;
                &:hover{
                  cursor: pointer;
                }
              }
            }
          }
        }
        span{
          line-height: 80px;
          cursor: pointer;
        }
        .right_theme{
        position: absolute;
        top:60px;
        right: 0;
        background-color: #fff;
        width:130px;
        z-index:200;
        box-shadow: 1px 1px 2px #ddd;
        display: none;
          .list>li:hover{
            color: #409eff;

          }
          
        }
      }
    }
    .comtent_box{
      width: 100%;
      height: 100%;
      background: url('../assets/images/login-bg.png') no-repeat;
      background-size: cover;
    }
  }
  #login{
   width:250px;
  height: 300px;
  padding:40px 40px;
  background: #fff;
  position: absolute;
  top:0;
  bottom:0;
  right: 100px;
  // right: -330px;
  margin: auto;
  border-radius: 0;
  z-index:100;
  box-shadow: 1px 1px 2px #eee;
.title{
   font-size: 16px;
    line-height: 40px;
    border-bottom:1px solid rgba(228,228,228,1);
    margin-bottom: 30px;
    text-align: left;
}
.btn{
  width: 100%;
  font-size: 14px
}
.pwdIcon{
    color:#409EFF;
    cursor: pointer;
}
  }
  .comtent_bg{
  position: absolute;
  width: 150px;
  height: 200px;
  top:0;
  bottom: 0;
  left: 80px;
  margin: auto;
  }
</style>
