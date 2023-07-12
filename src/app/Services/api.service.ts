import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/user.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl: string="http://localhost:3000/registerForm"
  constructor(private http:HttpClient) { }

  postRegister(registerObj:User){
    return this.http.post<User>(`${this.baseUrl}`,registerObj)
  }

  getRegister(){
    return this.http.get<User>(`${this.baseUrl}`)

  }
  updateRegister(id:any,registerObj:User){
    return this.http.put<User>(`${this.baseUrl}/${id}`,registerObj)

 }
 deleteRegister(id:number){
  return this.http.delete<User>(`${this.baseUrl}/${id}`)

 }
}
