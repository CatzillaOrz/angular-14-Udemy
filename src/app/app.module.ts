import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ButtonModule } from 'primeng/button';
import { PrnguiFormModule } from './components/primengui-form/primengui-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

const CUSTOM_COMPONENT = [AlertComponent];
const PRIMENG_MODULES = [ButtonModule, TableModule];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ...PRIMENG_MODULES,
    PrnguiFormModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent, ...CUSTOM_COMPONENT],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
