import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const CUSTOM_COMPONENT = [ArraySimpleComponent]


@NgModule({
  DeviceAcceleration: [...CUSTOM_COMPONENT]
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ArraySimpleModule { }