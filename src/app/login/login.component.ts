import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginData } from "../shared/models/LoginData";

import { AuthService } from "../shared/core/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  loginData = new LoginData("", "");
  validationError = {
    username: {
      status: false,
      message: '',
    },
    password: {
      status: false,
      message: '',
    },
  };
  errorMessage = '';

  constructor(public router: Router, private authService: AuthService) {

  }

  ngOnInit() {
  }

  onLogging() {
    console.log(this.loginData);
    this.validate();
    if (this.isDataValid()) {
      this.authService.login(this.loginData)
        .then(() => {
          console.log("onsubmit");
          //this.router.navigate(['/profile']);
        })
        .catch((err) => {
          console.log(err);
          if (err.status === 401) {
            this.errorMessage = 'Неправильный логин или пароль';
          } else if (err.status === 500) {
            this.errorMessage = 'Извините, ошибка на сервере';
          } else if (err.status === 404) {
            this.errorMessage = 'Извините, ошибка на сервере';
          } {
            this.errorMessage = err._body;
          }
        });
    }
  }

  onSubmit() {

  }

  validate() {
    console.log("validete");
    const username = this.loginData.username;
    const password = this.loginData.password;
    if (!username) {
      this.validationError.username.status = true;
      this.validationError.username.message = 'Введите имя пользователя';
    } else if (username.length < 6 || username.length > 24) {
      this.validationError.username.status = true;
      this.validationError.username.message = 'Имя пользоваетля должно иметь не менее 6 и не более 24 символов';
    } else if (!/^[A-Za-z0-9_\.$]+/g.test(username)) {
      this.validationError.username.status = true;
      this.validationError.username.message = 'Имя пользователя может ' +
        'содержать буквы латинского алфавита (большие и маленькие), знак подчёркивания "_" и точку "."';
    } else {
      this.validationError.username.status = false;
    }
    if (!password) {
      this.validationError.password.status = true;
      this.validationError.password.message = 'Введите пароль';
    } else if (password.length < 6 || password.length > 60) {
      this.validationError.password.status = true;
      this.validationError.password.message = 'Пароль должен иметь не менее 6 и не более 60 символов';
    } else {
      this.validationError.password.status = false;
    }
  }

  isDataValid() {
    return true;
    // return !this.validationError.password.status && !this.validationError.username.status;
  }

  ngAfterViewInit() {
    //if (this.authService.isLogged()) this.router.navigate(['/profile']);
    console.log(this.authService.isLogged());
  }
}
