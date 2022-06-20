import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableInputComponent } from './data-table-input.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { InputSwitchModule } from 'primeng/inputswitch';

const modules = [InputTextModule, ButtonModule, TableModule, InputSwitchModule, ChipsModule, DropdownModule];

@NgModule({
  declarations: [DataTableInputComponent],
  exports: [DataTableInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...modules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataTableInputModule { }