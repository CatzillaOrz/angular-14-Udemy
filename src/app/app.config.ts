export const canlendarZh = {
  firstDayOfWeek: 0,
  dayNames: [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
  dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
  monthNames: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  monthNamesShort: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  today: '今天',
  clear: '清除',
  dateFormat: 'yyyy-mm-dd',
  weekHeader: '周',
};

export const optFilesPropFormData = [
  {
    key: 'additional',
    label: '附加文件',
    layout: '12',
    type: 'inputText',
    inputType: 'number',
    required: true,
    value: 0,
    validateObj: {
      errmessage: '手机号码格式不正确',
      // validates: [Validators.required, Validators.pattern('^1[0-9]{10}$')],
    },
  },
  {
    key: 'net',
    label: '路网文件',
    layout: '12',
    type: 'inputText',
    required: false,
    value: 'sumo.net.xml',
  },
  {
    key: 'route',
    label: '路由文件',
    layout: '12',
    type: 'inputText',
    required: false,
    value: '100_car.rou.xml',
  },
  {
    key: 'object',
    label: '对象类型',
    type: 'tableInput',
    labelWidth: '10%',
    layout: '12',
    value: [],
    required: true,
    hidden: false,
    maxlength: 32,
    columnKey: 'attrCode',
    hiddenLabel: true,
    columns: [
      { field: 'name', header: 'name', width: '100px', required: true },
      {
        field: 'displayName',
        header: 'displayName',
        width: '100px',
        required: true,
      },
      {
        field: 'type',
        header: 'type',
        type: 'dropdown',
        options: [],
        width: '100px',
        required: true,
      },
      {
        field: 'required',
        header: 'required',
        type: 'inputSwitch',
        value: false,
      },
      {
        field: 'index',
        header: 'index',
        type: 'calendar',
        width: '100px',
        
      },
      {
        field: 'default',
        header: 'default',
        type: 'defaultChange',
        width: '115px',
      },
      { field: 'desc', header: 'desc', width: '100px' },
    ],
  },
];

export const optSpecFormData = [
  {
    label: '路网',
    controls: [
      { key: 'num', label: '输入框', type: 'inputText' },
      {
        key: 'model',
        label: '选择框',
        type: 'dropdown',
        options: [
          { label: '选项1', value: 'xh1' },
          { label: '选项2', value: 'xh2' },
          { label: '选项3', value: 'xh3' },
        ],
        change: (value: any) => {
          console.log(value);
        },
      },
      { key: 'result', label: '多行文本', type: 'inputTextArea' },
      {
        key: 'debugging',
        label: '调试',
        type: 'button',
        click: () => {
          console.log('debugging click');
          // console.log(this.form.formGroup.value);
        },
      },
      {
        key: 'numbers',
        label: '输入+按钮',
        type: 'inputGroup',
        icon: 'map-marker',
        iconClick: (event: Event) => {
          console.log(event);
        },
      },
      {
        key: 'autocomplete',
        label: '自动补全',
        type: 'autoComplete',
        placeholder: '输入 x 或 1',
        suggestions: [],
        completeMethod: (event) => {
          const list = ['xianghao1', 'xianghao2', 'xianghao3'];
          // this.form.formControls['autocomplete'].suggestions = list.filter((x) => x.includes(event.query));
        },
      },
      {
        key: 'datatime',
        label: '日期选择',
        type: 'calendar',
      },
      {
        key: 'enable',
        label: '启用',
        type: 'inputSwitch',
      },
      {
        key: 'checkboxGroup',
        label: '多选项',
        type: 'checkboxGroup',
        options: [
          { label: '选项1', value: 'xh1' },
          { label: '选项2', value: 'xh2' },
          { label: '选项3', value: 'xh3' },
        ],
      },
      {
        key: 'chips',
        label: '多标签',
        type: 'chips',
      },
      {
        key: 'colorPicker',
        label: '颜色选择',
        type: 'colorPicker',
      },
      {
        key: 'listbox',
        label: '列表选择',
        type: 'listbox',
        options: [
          { label: '选项1', value: 'xx1' },
          { label: '选项2', value: 'xx2' },
          { label: '选项3', value: 'xx3' },
        ],
      },
      {
        key: 'inputMask',
        label: '输入格式化',
        type: 'inputMask',
        mask: '99-999999',
      },
    ],
  },
  {
    label: '路由',
    controls: [
      { key: 'longitude', label: '付款', type: 'inputText' },
      { key: 'latitude', label: '首款', type: 'inputText' },
    ],
  },
  {
    label: '附件',
    controls: [
      {
        key: 'command',
        label: '下拉选项',
        type: 'dropdown',
        options: [
          { label: '选项1', value: 'ml1' },
          { label: '选项2', value: 'ml2' },
        ],
        change: (value: any) => {
          console.log(value);
        },
      },
      { key: 'params', label: '选项参数', type: 'inputText' },
      {
        key: 'debugging',
        label: '测试',
        type: 'button',
        click: () => {
          console.log('debugging click');
        },
      },
      { key: 'result', label: '输入区', type: 'inputTextArea' },
    ],
  },
];
