// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component'; 

const routes: Routes = [
  { path: '', component: ProductsComponent }, 
  { path: 'contact', component: ContactComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: ProductsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
