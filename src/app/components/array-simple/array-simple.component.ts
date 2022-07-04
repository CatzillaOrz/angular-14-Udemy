import {
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface arraySimpleValue {
  key?: string;
  label?: string;
  value?: string;
  type?: string;
  labelWidth?: string;
}

@Component({
  selector: 'app-array-simple',
  templateUrl: './array-simple.component.html',
  styleUrls: ['./array-simple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArraySimpleComponent),
      multi: true,
    },
  ],
})
export class ArraySimpleComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  value: arraySimpleValue[] = [];
  onChange: (value: any) => void;
  onTouch: (e) => void;

  @Input()
  disabled: boolean = false;

  writeValue(value: any): void {
    console.log(value);
    if (!value || value.constructor !== Array) value = [];
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {}
}
