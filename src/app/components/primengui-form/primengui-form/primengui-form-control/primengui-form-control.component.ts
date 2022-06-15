import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {
  PrimenguiCalendarLang,
  PrimenguiFormControl,
} from '../../primengui-form.type';

@Component({
  selector: 'app-primengui-form-control',
  templateUrl: './primengui-form-control.component.html',
  styleUrls: ['./primengui-form-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrimenguiFormControlComponent implements OnInit, OnChanges {
  @Input() formGroup: FormGroup;

  @Input() control: PrimenguiFormControl = {};

  @Input() labelWidth = '';

  classMap: { [key: string]: boolean } = {};

  calendarCN = PrimenguiCalendarLang;
  public srcValue = '';

  uploadedFiles: any[] = [];
  PreviewWidth = 104;
  file: File;

  ngOnInit(): void {
    this.setControl();
    this.setClassMap();
  }
  ngOnChanges(changes: SimpleChanges): void {}

  constructor(private messageService: MessageService) {}
  getImgSrc(key) {
    if (this.formGroup.controls && this.formGroup.controls[key]) {
      return this.formGroup.controls[key].value || '';
    } else {
      return '';
    }
  }

  blurFn() {}
  blurNumberFn(key) {
    let formValue = this.formGroup.getRawValue()[key];
    let p = {};
    p[key] = formValue;
    this.formGroup.patchValue(p);
  }
  blurFdFn(key) {
    let formValue = this.formGroup.getRawValue()[key];
    let p = {};
    p[key] = formValue;
    if (formValue) {
      let value = String(formValue).split('.');
      if (value.length === 2) {
        if (!value[0]) {
          value[0] = '0';
        }
        if (!value[1]) {
          value[0] = '0';
        }
        p[key] = Number(value.join('.'));
      }
    }
    this.formGroup.patchValue(p);
  }
  onClear(key) {
    this.formGroup.controls[key].setValue('');
  }
  onSelect(event, key) {
    let file = event.files[0];
    this.file = event.files[0];
  }
  setControl() {}

  setClassMap() {
    this.classMap = {
      [`primengui-form-control-${this.control.type.toLocaleLowerCase()}`]: true,
    };
  }

  errmessage(i, control) {
    if (i.errors) {
      if (Object.keys(i.errors).includes('required')) {
        return '必输';
      }
      if (
        Object.keys(i.errors).includes('pattern') &&
        control.type == 'spinner'
      ) {
        return '最多输入两位小数';
      }
      if (Object.keys(i.errors).includes('errmessage')) {
        return i.errors.errmessage;
      }
      if (control && control.validateObj && control.validateObj.errmessage) {
        return control.validateObj.errmessage;
      }
    }
    return '';
  }
}
