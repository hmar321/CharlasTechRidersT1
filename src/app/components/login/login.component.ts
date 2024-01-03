import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.builder.group({
      usuario: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  onSubmit(): void {

  }

}
