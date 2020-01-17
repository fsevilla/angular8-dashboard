import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, this.fullNameValidation.bind(this)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmation: ['',  [Validators.required, Validators.minLength(6)]]
    }, {
      validators: this.matchPassword.bind(this)
    });

    this.form.valueChanges.subscribe(data => {
      console.log('Form changes: ', data);
    })
  }

  signup() {
    console.log('Enviar datos', this.form);
  }

  hasError(controlName:string, errorType:string) {
    if(this.form.controls[controlName].errors !== null && this.form.controls[controlName].errors[errorType]) {
      return true;
    } else {
      return false;
    }
  }

  // Validar que tenga nombre y apellido
  fullNameValidation() {
    if(!this.form) return;

    const name = this.form.getRawValue().name;
    if(!name || name.split(' ').length > 1) {
      return null;
    } else {
      return {
        fullname: true
      }
    }
  }

  matchPassword() {
    if(!this.form) return;
    
    const { password, confirmation } = this.form.getRawValue();

    if(password === confirmation) {
      return null;
    } else {
      return {
        mismatch: true
      }
    }
  }

}
