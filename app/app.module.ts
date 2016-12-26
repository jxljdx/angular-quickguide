import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// For using [(NgModule)] in <Input>
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
