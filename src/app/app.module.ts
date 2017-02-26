import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddItemComponent } from './add-item.component';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './items.component';
import { RentItemComponent } from './rent-item.component';

import { BackgroundService } from './background.service';
import { ItemService } from './itemservice.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HomeComponent, ItemsComponent, RentItemComponent, AddItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BackgroundService, ItemService ]
})
export class AppModule { 
  
}
