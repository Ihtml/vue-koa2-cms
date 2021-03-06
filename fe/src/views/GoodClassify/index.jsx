import { defineComponent, ref, onMounted } from 'vue';
import { goodClassify } from '@/api';
import { result } from '@/helpers/utils';
import { message, Modal, Input } from 'ant-design-vue';
import store from '@/store';

const columns = [
  {
    title: '分类',
    dataIndex: 'title',
  },
  {
    title: '操作',
    slots: {
      customRender: 'actions',
    },
  },
];

export default defineComponent({
  setup() {
    const title = ref('');
    const list = ref([]);

    const getList = async () => {
      const res = await goodClassify.list();

      result(res)
        .success(({ data }) => {
          list.value = data;
        });
    };

    const add = async () => {
      const res = await goodClassify.add(title.value);

      result(res)
        .success(() => {
          getList();
          title.value = '';
          store.dispatch('getGoodClassify')
        });
    };

    onMounted(() => {
      getList();
    });

    const remove = async ({ _id }) => {
      const res = await goodClassify.remove(_id);

      result(res)
        .success(({ msg }) => {
          message.success(msg);

          getList();
          store.dispatch('getGoodClassify')
        });
    };

    const updateTitle = async ({ _id }) => {
      Modal.confirm({
        title: '请输入新的分类名称',
        content: (
          <div>
            <Input class="__good_classify_new_title" />
          </div>
        ),
        onOk: async () => {
          const title = document.querySelector('.__good_classify_new_title').value;

          const res = await goodClassify.updateTitle(_id, title);

          result(res)
            .success(({ msg }) => {
              message.success(msg);

              list.value.forEach((item) => {
                if (item._id === _id) {
                  item.title = title;
                }
              });
              store.dispatch('getGoodClassify')

            });
        },
      });
    };

    return {
      add,
      title,
      list,
      columns,
      remove,
      updateTitle,
    };
  },
});
