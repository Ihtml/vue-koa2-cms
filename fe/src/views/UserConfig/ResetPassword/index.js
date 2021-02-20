import { defineComponent, reactive } from 'vue';
import { UserConfig } from '@/api';
import { message } from 'ant-design-vue';
import { result } from '@/helpers/utils';

export default defineComponent({
  setup() {
    const form = reactive({
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });

    const resetPassword = async () => {
      const {
        confirmNewPassword,
        newPassword,
        oldPassword,
      } = form;

      if (confirmNewPassword !== newPassword) {
        message.error('两次输入密码不同');
        return;
      }

      const res = await UserConfig.resetPassword(
        newPassword,
        oldPassword,
      );

      result(res)
        .success(({ msg }) => {
          message.success(msg);

          form.oldPassword = '';
          form.confirmNewPassword = '';
          form.newPassword = '';
        });
    };

    return {
      form,
      resetPassword,
    };
  },
});
