import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(
    private _builder: FormBuilder, 
    private _sesionService: SesionService,
    private _router:Router
    ) { }

  ngOnInit() {
    this.formulario = this._builder.group({
      email: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  iniciarSesion(): void {
    var usu = this.formulario.get('email')?.value;
    var pass = this.formulario.get('password')?.value;
    this._sesionService.login(usu, pass).subscribe(data => {
      var token: string = data.response;
      localStorage.setItem('token', token);
      this._router.navigate(['/']);
    });;
  }

}
