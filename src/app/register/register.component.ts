import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private http:HttpClient,private router:Router) { 

  }

  onRegister(registerForm: FormGroup) {
    this.http.post<any>("http://localhost:3000/registerForm",this.registerForm.value)
    .subscribe((res: any) => this.registerForm);
    alert(this.registerForm);
    this.registerForm.reset()
    this.router.navigate(['../login']);
  }


  ngOnInit(){
    this.registerForm! = new FormGroup({
      FistName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

}
}