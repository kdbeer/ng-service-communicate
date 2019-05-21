import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';

import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [AppComponent, ComponentAComponent, ComponentBComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
