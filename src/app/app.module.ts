import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ButtonModule } from 'primeng/button';

const CUSTOM_COMPONENT = [AlertComponent];
const PRIMENG_MODULE = [ButtonModule];

@NgModule({
  imports: [BrowserModule, FormsModule, ...PRIMENG_MODULE],
  declarations: [AppComponent, HelloComponent, ...CUSTOM_COMPONENT],
  bootstrap: [AppComponent],
})
export class AppModule {}
