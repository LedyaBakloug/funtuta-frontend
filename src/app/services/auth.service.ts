import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/contants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(username: String, password: String) {
    return this.http.post(`${API_URL}/login`, {username, password});
   }
  
}
