import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ValidationService } from './shared/services/validation.service';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { InformationsCentralizationComponent } from './informations-centralization/informations-centralization.component';
import { ContactsCentralizationComponent } from './contacts-centralization/contacts-centralization.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { StoreModule } from '@ngrx/store';
import { insuredReducer } from './reducer';
import { PhoneFormatPipe } from './shared/pipes/phone-format.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorMessageComponent,
    InformationsCentralizationComponent,
    ContactsCentralizationComponent,
    ContactsListComponent,
    PhoneFormatPipe,
    ContactFormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    StoreModule.forRoot({insured: insuredReducer})

  ],
  providers: [ ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
