import store from '@/store';

export const getClassifyTitleById = (id) => {
  const one = store.state.goodClassify.find((item) => (item._id === id));

  return one && one.title || '暂无分类';
};
