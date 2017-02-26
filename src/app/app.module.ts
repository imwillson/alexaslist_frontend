import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './items.component';
import { BackgroundService } from './background.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, ItemsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BackgroundService ]
})
export class AppModule { 
  
}
