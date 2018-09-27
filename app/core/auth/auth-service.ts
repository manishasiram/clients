import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class AuthServices {
    userData: Array<{}>;
    tocken: Number = 0;
    tockenDetails: String;
    private loggedIn = new BehaviorSubject<boolean>(this.validateUserTocken());
    constructor() {
      this.userData = [{
        email: 'test@test.com', password: 'test1234'
      }];
    }

    setTocken() {
      this.tocken = new Date().getTime();
      localStorage.setItem('tocken', JSON.stringify(this.tocken));
      this.loggedIn.next(true);
    }

    validateUserTocken() {
      this.tockenDetails = localStorage.getItem('tocken');
      return (this.tockenDetails != null) ? true : false;
    }

    // it should be from backend
    validateUserDetails(user) {
      const _userList = this.userData;
      for (let i = 0; i < _userList.length; i++) {
        if (user.email.toLowerCase() === _userList[i]['email'].toLowerCase() && user.password === _userList[i]['password']) {
          return true;
        } else {
          return false;
        }
      }
    }

    get isLoggedIn() {
      return this.loggedIn.asObservable();
    }

    logout() {
      this.loggedIn.next(false);
      localStorage.clear();
    }
}
