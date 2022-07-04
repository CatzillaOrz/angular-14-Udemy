import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { PrimenguiFormComponent } from './components/primengui-form/primengui-form/primengui-form.component';
import { PrimeNGConfig } from 'primeng/api';
import {
  canlendarZh,
  optFilesPropFormData,
  optSpecFormData,
} from './app.config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private config: PrimeNGConfig) {}

  ngOnInit() {
    this.config.setTranslation(canlendarZh);
  }

  name = 'My Angular ' + VERSION.major + 'FormBuilder';
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

  optFilesPropFormData = optFilesPropFormData;

  optSpecFormData = optSpecFormData;
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
