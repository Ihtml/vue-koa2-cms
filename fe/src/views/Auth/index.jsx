import { defineComponent, reactive, ref } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
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

    return {
      // 注册相关的数据
      regForm,

      // 登入相关数据
      // login
    }
  },

})
