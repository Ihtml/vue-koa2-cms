import { defineComponent, reactive} from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { auth } from '@/api';
import { result } from '@/helpers/utils';
import { message, Modal, Input } from 'ant-design-vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
  setup(){
    // 注册用的表单数据
    const regForm = reactive({
      account: '',
      password: '',
      inviteCode: '',
    })
    // 登入用的表单数据
    const loginForm = reactive({
      account: '',
      password: '',
    })

    const login = () => {
      console.log('login');
      if (loginForm.account === '') {
        message.info('请输入账户');
        return;
      }

      if (loginForm.password === '') {
        message.info('请输入密码');
        return;
      }

      auth.login(loginForm.account, loginForm.password).then(res => {
        console.log(res);
        message.success(res.data.msg)
      })
    }

    const register = async () => {
      console.log('register');
      if (regForm.account === '') {
        message.info('请输入账户');
        return;
      }

      if (regForm.password === '') {
        message.info('请输入密码');
        return;
      }

      if (regForm.inviteCode === '') {
        message.info('请输入邀请码');
        return;
      }
      // auth.register(regForm.account, regForm.password, regForm.inviteCode)
      // .then(res => message.success(res.data.msg))

      const res = await auth.register(
        regForm.account,
        regForm.password,
        regForm.inviteCode,
      );

      result(res)
        .success((data) => {
          message.success(data.msg);
        });
    }

    return {
      // 注册相关的数据
      regForm,
      register,

      // 登入相关数据
      login,
      loginForm,
    }
  },

})
