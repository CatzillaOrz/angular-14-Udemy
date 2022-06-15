import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimenguiFormControl, PrimenguiFormGroup, PrimenguiFormGroupType, PrimenguiFormTheme } from '../primengui-form.type';

@Component({
  selector: 'app-primengui-form',
  templateUrl: './primengui-form.component.html',
  styleUrls: ['./primengui-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimenguiFormComponent implements OnInit, OnChanges {

    @Input() formGroup: FormGroup = new FormGroup({});

    @Input() theme: PrimenguiFormTheme = 'light';

    @Input() group: PrimenguiFormGroupType = 'tabs';
    
    @Input() controls: PrimenguiFormControl[] | PrimenguiFormGroup[] = [];
    
    @Input() labelWidth = '130px';
    
    @Input() layout = 4;

    
    classMap: { [key: string]: boolean } = {};
    
    formControls: { [key: string]: PrimenguiFormControl } = {};
    
    isGroup: boolean;
  
    index = 0;
  
    ngOnInit(): void {
      this.isGroup = this.controls && this.controls.length > 0 && this.controls[0].controls ? true : false;
      this.setClassMap();
      this.setFormGroup();
    }
    ngOnChanges(changes: SimpleChanges): void {
      if (changes.controls && changes.controls.currentValue && changes.controls.previousValue && changes.controls.currentValue !== changes.controls.previousValue) {
        this.setFormGroup();
      }
    }
  
    constructor(public cdr: ChangeDetectorRef) { }
  
    setClassMap() {
      this.classMap = {
        [`dtui-form-group`]: this.isGroup,
        [`dtui-form-${this.theme}`]: true
      };
    }
    changeTabViewIndex(index) {
      this.index = index;
      this.cdr.detectChanges();
    }
  
    initFormGroup() {
      this.formGroup = new FormGroup({});
    }

    /**
     * 设置响应式表单控件
     * 如果 controls 参数中的控件变化，可以重新调用此方法动态添加控件
     *
     * @memberof PrimenguiFormComponent
     */
    setFormGroup() {
      this.formControls = {};
      const addControl = (control: PrimenguiFormControl) => {
        if (control) {
          let value = typeof control.value === 'undefined' || control.value == null ? '' : control.value;
          if (!this.formControls[control.key]) {
            this.formControls[control.key] = control;
          }
          if (!this.formGroup.controls[control.key]) {
            let ctl = new FormControl(value);
            if (control.disabled) ctl.disable();
            this.formGroup.addControl(control.key, ctl);
          }
        }
      };
      this.controls.forEach((control: PrimenguiFormControl) => {
        addControl(control);
      });
    }
    
    ptabviewChange(event,groupControls) {
      if (event && event.index) {
        this.index = event.index;
        //选择中tabview
        if(groupControls[this.index] && groupControls[this.index]['tabselected']){
          groupControls[this.index].tabselected();
        }
      } else {
        this.index = 0;
      }
    }
}
