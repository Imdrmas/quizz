import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Level} from "../model/Level";
import {Observable} from "rxjs";
import {Response} from "../model/Response";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }

  public addResponse(response: Response, idQuestion: number): Observable<Response> {
    return this.http.post<Response>(`http://localhost:8888/api/addResponse/${idQuestion}`, response);
  }
  public getResponses(idQuestion: number): Observable<Response[]> {
    return this.http.get<Response[]>(`http://localhost:8888/api/getResponses/${idQuestion}`);
  }
}
