import { AddThemeComponent } from './add-theme/add-theme.component';
import { ResponsesComponent } from './responses/responses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeComponent } from './theme/theme.component';
import { QuizzComponent } from './quizz/quizz.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './historique/historique.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionContentComponent } from './question-content/question-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'historique', component: HistoriqueComponent },
  {path: 'theme', component: ThemeComponent,
   children: [
    {path: 'quizz', component: QuizzComponent},
    {path: 'themeContent', component: ThemeContentComponent},
    {path: '', component: WelcomeComponent}
   ]
  },
  {
    path: 'questions',
    component: QuestionsComponent,
   children: [
    {path: '', component: WelcomeComponent},
    {path: 'addTheme', component: AddThemeComponent},
    {path: 'questionContent', component: QuestionContentComponent,
    children: [
      {
        path: 'responses', component: ResponsesComponent
      }
    ]}
   ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
