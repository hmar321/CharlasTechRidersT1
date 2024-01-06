import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApiCharlas;
  }

  login(email: string, password: string): Observable<any> {
    var objeto = new Login(email, password);
    var request = "api/Auth/Login";
    var url = this.urlApi + request;
    return this.http.post(url, objeto);
  }

  cerrarSesion():void{
    localStorage.clear();
  }
}
