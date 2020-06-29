import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailid:string='';
  password:string='';
  showerror=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  getemailid(value){
   this.emailid=value;
  }

  getpassword(value){
    this.password=value;
  }

  submitform(){
   if(this.emailid=="" || this.password==""){
      this.showerror=true;
   }
   else{
    this.showerror=false;
    this.router.navigate(['home']);
   }
  }
}
