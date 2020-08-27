import { Injectable } from '@angular/core';
import {Level} from "../model/Level";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Question} from "../model/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public addQuestion(question: Question, idLevel: number): Observable<Question> {
    return this.http.post<Question>(`http://localhost:8888/api/addQuestion/${idLevel}`, question);
  }

  public getQuestions(idLevel: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8888/api/getQuestions/${idLevel}`,);
  }
}
