import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployerComponent } from './components/employer/employer.component';
import { EmployersComponent } from './components/employers/employers.component';
import { FiltersComponent } from './components/filters/filters.component';
import { InfoHeaderComponent } from './components/info-header/info-header.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployerComponent,
    EmployersComponent,
    FiltersComponent,
    InfoHeaderComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
