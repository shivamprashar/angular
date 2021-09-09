import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { LanguageDetailComponent } from './language-detail/language-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '', redirectTo : '/LoginComponent', pathMatch: 'full'},
  {  path : 'home' , component : HomeComponent  },
  { path : 'customers' , component : CustomersComponent },
  { path : 'home/:id' , component : LanguageDetailComponent },
  { path : '**', component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,CustomersComponent,HomeComponent,LanguageDetailComponent]