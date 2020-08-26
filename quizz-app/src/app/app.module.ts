import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoriqueComponent } from './historique/historique.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { ResponsesComponent } from './responses/responses.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    HistoriqueComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    QuizzComponent,
    ThemeComponent,
    ThemeContentComponent,
    WelcomeComponent,
    ResultComponent,
    QuestionsComponent,
    QuestionContentComponent,
    ResponsesComponent,
    AddThemeComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  entryComponents: [
    AddQuestionComponent,
    AddThemeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
