import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  incorrectCredentials:boolean;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private loginService:LoginService,
    private authService:AuthService
  ) { }

  ngOnInit() {

    // Inicializar formulario
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required]
    });


    // Actualizar datos despues de haber sido inicializado
    // setTimeout(() => {
    //   const user = {
    //     email: 'lorem@ipsum.com',
    //     password: '1234'
    //   };
    //   this.form.patchValue(user);
    // }, 3000);
  }

  login() {
    console.log(this.form);
    if(this.form.valid) {
      console.log('Enviar datos', this.form.getRawValue());
      const credentials = this.form.getRawValue();
      this.loginService.login(credentials)
        .then(response => {
          this.authService.saveToken(response);
          return this.loginService.me();
        })
        .then(response => {
          this.authService.saveUser(response);
          this.router.navigate(['/']);
        })
        .catch(err => {
          this.authService.clearToken();
          this.incorrectCredentials = true;
        });

    } else {
      console.log('Faltan datos');
    }
  }

  hasError(controlName:string, errorType:string) {
    if(this.form.controls[controlName].errors !== null && this.form.controls[controlName].errors[errorType]) {
      return true;
    } else {
      return false;
    }
  }

}
