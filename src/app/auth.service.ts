import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName,password){
    return this.http.post('/api/auth.php',{
      userName,
      password
    }).subscribe(data=>{
      console.log(data, "we gor from server")
    })
  }
}
