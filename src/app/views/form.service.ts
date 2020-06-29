import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  private _register_url:string = "http://localhost:5000/api/register";

  RegisterUser(user)
  {
    return this.http.post<any>(this._register_url,user);
  }
}
