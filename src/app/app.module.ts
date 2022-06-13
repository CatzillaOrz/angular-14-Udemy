import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AlertComponent } from './shared/alert/alert.component';

const CUSTOM_COMPONENT = [AlertComponent];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ...CUSTOM_COMPONENT],
  bootstrap: [AppComponent],
})
export class AppModule {}
