import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public showLoginModule$ = new Subject<any>();

  // Observable string streams
  // showLoginCalled$ = this.showLoginModule$.asObservable();

  constructor() { }
  
  // toLogin(state: boolean) {
  //   this.showLoginModule$.next(state);
  // }
}
