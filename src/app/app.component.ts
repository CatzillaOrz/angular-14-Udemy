import { Component, VERSION, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimenguiFormComponent } from './components/primengui-form/primengui-form/primengui-form.component';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements Oninit {
  constructor(
    private config: PrimeNGConfig,
    private translateService: TranslateService
  ) {}

  ngOninit() {
    this.translateService.setDefaultLang('zh'); // 设置当前的默认语言类型
    this.translateService.use('zh'); // 设置使用的语言类型
  }

  name = 'Angular ' + VERSION.major;
  rawData = '';
  valueDate;

  cols = [{ vin: 'vin', year: 'Vin', brand: 'brand', color: 'color' }];

  @ViewChild('opt', { static: false }) opt: PrimenguiFormComponent;
  @ViewChild('propForm', { static: false }) propForm: PrimenguiFormComponent;

  getRawData() {
    console.log(this.opt.formGroup.getRawValue());
    this.rawData = JSON.stringify(
      this.propForm.formGroup.getRawValue(),
      null,
      '  '
    );
  }

  patchTabelVal() {
    this.opt.formGroup.patchValue({
      additional: '0',
      net: '0',
      route: '0',
      object: [
        {
          name: 1,
          displayName: 1,
          type: false,
          required: false,
          index: false,
          default: 0,
          desc: 'help',
        },
      ],
    });
    this.opt.setFormGroup();
    this.opt.cdr.detectChanges();
  }

  optFilesPropFormData = [
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
        validates: [Validators.required, Validators.pattern('^1[0-9]{10}$')],
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
      className: 'col-12',
      value: [],
      required: true,
      hidden: false,
      maxlength: 32,
      columnKey: 'attrCode',
      columns: [
        { field: 'name', header: '属性名称', width: '100px', required: true },
        {
          field: 'displayName',
          header: '展示名称',
          width: '100px',
          required: true,
        },
        {
          field: 'type',
          header: '属性类型',
          type: 'dropdown',
          options: [],
          width: '100px',
          required: true,
        },
        {
          field: 'required',
          header: '属性是否必填',
          type: 'inputSwitch',
          value: false,
        },
        { field: 'index', header: '索引', type: 'inputSwitch', value: false },
        {
          field: 'default',
          header: '属性默认值',
          type: 'defaultChange',
          width: '115px',
        },
        { field: 'desc', header: '描述', width: '100px' },
      ],
    },
  ];

  optSpecFormData = [
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

  setDisabled(keys: string[], value = true) {
    for (let key of keys) {
      // this.propForm.formControls[key].disabled = value;
    }
  }

  setSelectOptions(tabKey: string, key: string, options: any[]) {
    // const tab = this.propFormData.find((x) => x.key == tabKey);
    // if (tab) {
    //   const select = tab.controls.find((x) => x.key == key);
    //   if (select) {
    //     select.options = options;
    //   }
    // }
  }

  setFormDisabled(...tabKeys: string[]) {
    let keys = [];
    for (let tabKey of tabKeys) {
      // let tab = this.propFormData.find((x) => x.key == tabKey);
      // if (tab) keys.push(...tab.controls.map((x) => x.key));
    }
    this.setDisabled(keys);
  }

  setLeftSelectOptions(tabKey: string, key: string, options: any[], def?: any) {
    // const tab = this.queryFormData.find((x) => x.key == tabKey);
    // if (tab) {
    //   const select = (tab.config as Array<any>).find((x) => x.value == key);
    //   if (select) {
    //     select.options = options;
    //     if (def) {
    //       let defItem = options.find((x) => x.value === def);
    //       if (defItem) this.queryCard.formGroup.patchValue({ [key]: def });
    //     }
    //   }
    // }
  }

  /* 
  

  createDynamicControl(data: { attributes: Attribute[]; features: Attribute[] }) {
    this.dynamicInvalid = [];
    // this.createControls({ attributes: data.attributes, features: data.features });
    this.createControls({ attributes: data.attributes });
    if (this.propForm.formGroup) this.propForm.setFormGroup();
  }

  createControls(controls: { [tabKey: string]: Attribute[] }) {
    if (!controls) return;
    for (let key in controls) {
      let attrs = [];
      let data = controls[key];
      if (data) {
        data.forEach((attribute) => {
          attrs = [...attrs, this.createControl(attribute)];
          if (attribute.required) this.dynamicInvalid.push(attribute.name);
        });
      }
      const tab = this.propFormData.find((x) => x.key === key);
      if (tab) {
        this.removeControls(tab.controls);
        tab.controls = attrs;
      }
    }
  }

  removeControls(controls: PrimenguiFormControl[]) {
    for (let control of controls) {
      delete this.propForm.formControls[control.key];
      this.propForm.formGroup.removeControl(control.key);
    }
  }

  createControl(attr: Attribute) {
    let value = '';
    if (this.type === 'update' && Object.keys(this.formValue).includes(attr.name)) {
      value = this.formValue[attr.name];
    }
    if (attr.name === 'thingTenant') {
      return {
        key: attr.name,
        label: attr.displayName,
        type: 'select',
        value: value,
        options: this.tenants,
        required: attr.required,
        disabled: this.notAddUpdateAuth
      };
    }
    switch (attr.type) {
      case 'text':
        return {
          key: attr.name,
          label: attr.displayName,
          type: 'inputText',
          required: attr.required,
          value: value,
          disabled: this.notAddUpdateAuth
        };
      case 'timestamp':
        if (isNumber(value)) value = format(new Date(value), 'yyyy-MM-dd HH:mm:ss');
        return {
          key: attr.name,
          label: attr.displayName,
          type: 'datetime',
          required: attr.required,
          value: value,
          disabled: this.notAddUpdateAuth
        };
      case 'number':
      case 'integer':
        return {
          key: attr.name,
          label: attr.displayName,
          type: 'inputText',
          inputType: 'number',
          required: attr.required,
          value: value,
          disabled: this.notAddUpdateAuth
        };
      case 'boolean':
        return {
          key: attr.name,
          label: attr.displayName,
          type: 'inputSwitch',
          value: value,
          disabled: this.notAddUpdateAuth
        };
    }
  }

  
  */
}
