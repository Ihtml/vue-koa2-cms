import { defineComponent, reactive } from 'vue';
import { good } from '@/api';
import { message } from 'ant-design-vue';
import store from '@/store';
import { result, clone } from '@/helpers/utils';

const defaultFormData = {
  name: '',
  price: 0,
  producedDate: '',
  expirationDate: '',
  classify: '',
  count: '',
};

export default defineComponent({
  props: {
    show: Boolean,
  },
  setup(props, context) {
    const addForm = reactive(clone(defaultFormData));

    if (store.state.goodClassify.length) {
      addForm.classify = store.state.goodClassify[0]._id;
    }

    const close = () => {
      context.emit('update:show', false);
    };

    const submit = async () => {
      const form = clone(addForm);
      form.producedDate = addForm.producedDate.valueOf();
      form.expirationDate = addForm.expirationDate.valueOf();
      const res = await good.add(form);

      result(res)
        .success((d, { data }) => {
          Object.assign(addForm, defaultFormData);
          message.success(data.msg);

          context.emit('getList');

          close();
        });
    };

    return {
      addForm,
      submit,
      props,
      close,
      store: store.state,
    };
  },
});
