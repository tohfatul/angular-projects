import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListDetailComponent } from './employee-list-detail/employee-list-detail.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
// import { DepartmentListComponent } from './department-list/department-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    EmployeeListDetailComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
