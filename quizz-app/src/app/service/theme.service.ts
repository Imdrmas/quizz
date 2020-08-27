import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Theme} from '../model/Theme';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  public addTheme(theme: Theme): Observable<Theme> {
  return this.http.post<Theme>(`http://localhost:8888/api/addTheme`, theme);
}
public getThemes(): Observable<Theme[]> {
  return this.http.get<Theme[]>(`http://localhost:8888/api/getThemes`);
}
  public getTheme(id: number): Observable<Theme> {
    return this.http.get<Theme>(`http://localhost:8888/api/getTheme/${id}`);
  }

}
