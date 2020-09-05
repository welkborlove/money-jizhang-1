import recordStore from './recordStore';
import tagStore from './tagStore';

const store = {
    ...recordStore,
    ...tagStore
    //1全局变量太多 解决了
    //2严重依赖 window
  
    //tag store
  
  };
  export default store;