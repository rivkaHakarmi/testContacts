import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InsertStudentComponent } from './students/insert-student/insert-student.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CityService } from './shared/services/city.service';
import { ValidationService } from './shared/services/validation.service';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { StudentsTableComponent } from './students/students-table/students-table.component';
import { InformationsCentralizationComponent } from './informations-centralization/informations-centralization.component';
import { ContactsCentralizationComponent } from './contacts-centralization/contacts-centralization.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { StoreModule } from '@ngrx/store';
import { addInsuredReducer } from './reducer';
const appRoutes: Routes = [
  {
    path: 'students',
    children: [
      { path: '', component: StudentsTableComponent },
      { path: 'insert', component: InsertStudentComponent }
    ]
  },
  { path: '', component: StudentsTableComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    InsertStudentComponent,
    ErrorMessageComponent,
    StudentsTableComponent,
    InformationsCentralizationComponent,
    ContactsCentralizationComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    StoreModule.forRoot({product: addInsuredReducer})

  ],
  providers: [CityService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
