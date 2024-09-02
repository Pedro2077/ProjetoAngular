// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component.html';
import { CustomersComponent } from './customers/customers.component.html';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'customers', component: CustomersComponent },
  // Adicione outras rotas aqui conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
