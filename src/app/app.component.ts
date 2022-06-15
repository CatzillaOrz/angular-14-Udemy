import { Component, VERSION, ViewChild } from '@angular/core';
import { PrimenguiFormComponent } from './components/primengui-form/primengui-form/primengui-form.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  rawData = '';

  @ViewChild('opt', { static: false }) opt: PrimenguiFormComponent;
  @ViewChild('opts', { static: false }) opts: PrimenguiFormComponent;

  getRawData() {
    console.log(this.opt.formGroup.getRawValue());
    this.rawData = JSON.stringify(this.opts.formGroup.getRawValue(), null, '  ');
  }

  optFilesPropFormData = [
    {
      key: 'additional-files',
      label: '附加文件',
      layout: '12',
      type: 'inputNumber',
      required: true,
      value: 0,
    },
    {
      key: 'net-file',
      label: '路网文件',
      layout: '12',
      type: 'inputText',
      required: false,
      value: 'sumo.net.xml',
    },
    {
      key: 'route-files',
      label: '路由文件',
      layout: '12',
      type: 'inputText',
      required: false,
      value: '100_car.rou.xml',
    },
  ];

  optSpecFormData = [
    {
      label: '基础数据',
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
          label: '输入带出',
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
          label: '多值输入',
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
      ]
    },
    {
      label: '属性',
      controls: [
        // { key: 'longitude', label: '经度', type: 'inputText' },
        // { key: 'latitude', label: '纬度', type: 'inputText' },
      ],
      controls_two: [
        { key: 'listtow', label: 'listtow', type: 'inputText' },
      ]
    },
    {
      label: '命令',
      controls: [
        {
          key: 'command',
          label: '下发命令',
          type: 'dropdown',
          options: [
            { label: '命令1', value: 'ml1' },
            { label: '命令2', value: 'ml2' },
          ],
          change: (value: any) => {
            console.log(value);
          },
        },
        { key: 'params', label: '命令参数', type: 'inputText' },
        {
          key: 'debugging',
          label: '调试',
          type: 'button',
          click: () => {
            console.log('debugging click');
          },
        },
        { key: 'result', label: '返回数据', type: 'inputTextArea' },
      ],
    },
  ];
}
