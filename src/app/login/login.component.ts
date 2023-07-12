import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private http:HttpClient,private router:Router) { 

  }

  onlogin(loginForm: FormGroup) {
    this.http.get<any>("http://localhost:3000/registerForm")
    .subscribe((res)=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
          alert("You are successfully login!")
           this.loginForm.reset();
           this.router.navigate(['../dashbord'])
      }else{
        alert("You are unccessfully login!")
        this.router.navigate(['../register'])
      }
    })
  }
   
  



  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
    });

}
}
