import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySimpleComponent } from './array-simple.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

const CUSTOM_COMPONENT = [ArraySimpleComponent];
const PRIMENG_MODULES = [InputTextModule];

@NgModule({
  declarations: [...CUSTOM_COMPONENT],
  exports: [...CUSTOM_COMPONENT], // TODO: need export to use
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...PRIMENG_MODULES],
})
export class ArraySimpleModule {}
