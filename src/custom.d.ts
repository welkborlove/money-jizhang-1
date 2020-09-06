type RecordItem = {
  tags: string[] | undefined;
  notes: string;
  type: string;
  amount: number; //数据类型 object | string
  createdAt?: Date; // 类 /构造函数
};

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetchRecords: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //success表示成功
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  saveRecords: () => void
}

interface Window {
  
}