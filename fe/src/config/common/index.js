import { reactive } from 'vue';
import DASHBOARD from './Pages/Dashboard';
import CLASSIFY from './Pages/Classify';
import TOPIC_MGR from './Pages/TopicMgr';

export default reactive({
  SITE_NAME: '药品库存管理系统',

  KEYWORD: '药品',

  PAGE_META: {
    DASHBOARD,
    CLASSIFY,
    TOPIC_MGR,
  },
});
