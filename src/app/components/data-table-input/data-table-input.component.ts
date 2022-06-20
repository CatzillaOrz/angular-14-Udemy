import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-data-table-input',
  templateUrl: './data-table-input.component.html',
  styleUrls: ['./data-table-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DataTableInputComponent),
      multi: true,
    },
  ],
})
export class DataTableInputComponent implements OnInit, ControlValueAccessor {
  @Input() name: string;
  @Input() valueMaxLength;
  @Input() formCtrl: FormControl;
  @Input() labelWidth = '30%';
  @Input() columns = [];
  @Input() columnKey;
  @Output() valid = new EventEmitter<Boolean>();
  msg: string = '';
  classMap: { [key: string]: boolean } = {};

  // 组件注册成表单元素需要实现的属性和方法
  value: any[] = [];
  @Input() disabled: boolean = false;
  onChange: (value: any) => void;
  onTouched: () => void;
  writeValue(value: any): void {
    if (!value || value.constructor !== Array) {
      value = [];
    }
    this.value = value;
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  ngOnInit(): void {
    this.setClassMap();
    setTimeout(() => {
      if (this.value.length) {
        this.add();
        this.delete(this.value.length - 1);
      }
    }, 800);
  }

  constructor() {}

  setClassMap() {
    this.classMap = {};
  }

  add() {
    let obj: { [prop: string]: any } = {};
    this.columns.forEach((x) => {
      obj[x.field] = '';
    });
    this.value = [...this.value, obj];
    this.onChange(this.value);
  }

  delete(row) {
    this.value.splice(this.value.indexOf(row), 1);
    this.checkValues();
    this.onChange(this.value);
  }

  valueChange(val, field) {
    if (field === this.columnKey) {
      this.checkValues();
    }
  }

  dropdownChange(data) {
    data.default = '';
  }

  blurFdFn(formValue) {
    let p = {};
    if (formValue) {
      let value = String(formValue).split('.');
      if (value.length === 2) {
        if (!value[0]) {
          value[0] = '0';
        }
        if (!value[1]) {
          value[0] = '0';
        }
        formValue = Number(value.join('.'));
      }
    }
  }

  checkValues() {
    // if (!this.columnKey) return;
    // let repeat: { [key: string]: boolean } = {};
    // for (let val of this.value) {
    //   let len = this.value.filter((x) => x[this.columnKey] === val[this.columnKey] && x[this.columnKey] !== '').length;
    //   if (len >= 2) {
    //     repeat[val[this.columnKey]] = true;
    //   }
    // }
    // const keys = Object.keys(repeat);
    // const fieldKey = this.columns.find((x) => x.field === this.columnKey);
    // if (keys.length > 0 && fieldKey) {
    //   this.msg = `不能存在相同的${fieldKey.header}：${keys.join(',')}`;
    // } else {
    //   this.msg = '';
    // }
    // this.valid.emit(this.msg === '');
  }
}
