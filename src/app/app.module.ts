import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { SumService } from './sum.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { LanguageDetailComponent } from './language-detail/language-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EntryComponent,
    LoginComponent,
    CustomersComponent,
    LanguageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SumService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
