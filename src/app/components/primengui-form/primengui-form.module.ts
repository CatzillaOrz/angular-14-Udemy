import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'primeng/fileupload';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { ColorPickerModule } from 'primeng/colorpicker';
import { ListboxModule } from 'primeng/listbox';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';
import { ChipsModule } from 'primeng/chips';
import { InputSwitchModule } from 'primeng/inputswitch';

const modules = [
  ButtonModule,
  DropdownModule,
  AccordionModule,
  TabViewModule,
  RadioButtonModule,
  CalendarModule,
  InputTextModule,
  InputTextareaModule,
  SelectButtonModule,
  AutoCompleteModule,
  InputSwitchModule,
  ChipsModule,
  ColorPickerModule,
  ListboxModule,
  InputMaskModule,
  MultiSelectModule,
  TooltipModule,
  FileUploadModule,
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class PrnguiFormModule {}
