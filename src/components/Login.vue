<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_title">登入</div>
      <!--  form 区域     -->
      <div class="login_form">
        <el-form label-width="70px"  ref="LoginFromRef" :model="LoginFrom" :rules="LoginFromRules" >
          <!--用户名-->
          <el-form-item  label="用户名" prop="username">
            <el-input  v-model="LoginFrom.username"></el-input>
          </el-form-item>
          <!--用户名-->
          <el-form-item label="密码" prop="password">
            <el-input  v-model="LoginFrom.password" type="password"></el-input>
          </el-form-item >
          <el-form-item  >
            <el-button class="login_button" type="primary" @click="Login">登入</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      LoginFrom: {
        username: 'admin',
        password: '123456'
      },
      LoginFromRules: {
        username: [
          { required: true, message: '请输入登入名称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    Login: function () {
      this.$refs.LoginFromRef.validate(async valid => {
        if (!valid) return false
        const { data: res } = await this.$http.post('user/login', this.LoginFrom)
        if (res.code !== 0) {
          this.$message.error(res.msg)
          return false
        } else {
          this.$message.success(res.msg)
        }
        // 保持到localStorage
        window.localStorage.setItem('token', res.data.token)
        await this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #2b3b6b;
    height: 100%;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 3px;
    /*放到中间*/
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .login_title {
      height: 60px;
      padding-top: 20px;
      text-align: center;
      font-size: 40px;
      font-family: "Microsoft YaHei",serif;
      font-weight: 400;
      margin: 0 auto;
    }

    .login_form {
      padding-top: 30px;
      padding-right: 60px;
      box-sizing: border-box;
    }
  }
  .login_button{
    width: 100%;
  }
</style>
