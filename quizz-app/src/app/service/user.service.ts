import { Injectable } from '@angular/core';


const USERNAME_KEY = 'AuthUsername';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }
}
