import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

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
