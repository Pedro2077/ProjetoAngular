// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "contact", component: ContactComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'products', component: ProductsComponent}, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
