import {
  Component,
  forwardRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-array-multi',
  templateUrl: './array-multi.component.html',
  styleUrls: ['./array-multi.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArrayMultiComponent),
      multi: true,
    },
  ],
})
export class ArrayMultiComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  value = {};
  onChange: (e) => void;
  onTouch: (e) => void;

  keyValues: { key: string; value: string }[] = [];

  writeValue(value: any): void {
    if (!value || value.constructor !== Object) this.value = {};
    this.value = value;
    this.setKeyValues();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {}

  setKeyValues() {
    let list = [];
    for (let key in this.value) {
      list.push({ key: key, value: this.value[key] });
    }
    this.keyValues = list;
  }

  setValeus() {
    this.value = {};
    for (let item of this.keyValues) {
      this.value[item.key] = this.setKeyValues[item.value];
    }
    this.onChange(this.value);
  }

  onKeyChange() {
    this.setValeus();
  }

  onValueChange() {
    this.setValeus();
  }

  add() {
    this.keyValues = [...this.keyValues, { key: '', value: '' }];
  }

  del(index){
    this.keyValues = this.keyValues.splice(index, 1)
    this.setValue();
  }
}
