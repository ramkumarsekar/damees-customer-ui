import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public showLoginModule$ = new BehaviorSubject<boolean>(false);
  constructor() { }
  
  toLogin(state: boolean) {
    this.showLoginModule$.next(state);
  }
}
