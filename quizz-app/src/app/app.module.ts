import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  entryComponents: [
    AddQuestionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
