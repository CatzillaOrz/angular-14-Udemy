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
  onTouch: () => void;

  @Input()
  disabled: boolean = false;

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {}
}
