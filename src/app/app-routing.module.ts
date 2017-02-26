import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddItemComponent } from './add-item.component';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'add-item', component: AddItemComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
    
}