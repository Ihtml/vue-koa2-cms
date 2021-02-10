import { defineComponent, reactive} from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { auth } from '../../api';
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
    }

    const register = () => {
      console.log('register');
      auth.register(regForm.account, regForm.password, regForm.inviteCode)
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
