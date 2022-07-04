import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ArrayMultiComponent } from './array-multi.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputTextModule],
  declarations: [ArrayMultiComponent],
  exports: [ArrayMultiComponent],
})
export class ArrayMultiModule {}
