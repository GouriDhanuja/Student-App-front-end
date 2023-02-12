import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }//1st executed

ngOnInit(): void {//2nd executed
}


//properties

id:any;

pswd:any;

//model for login

loginForm=this.fb.group({

  id:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

// userDetails:any={
//   1:{id:1,username:"Jeeva",password:1},
//   2:{id:2,username:"Amal",password:2},
//   3:{id:3,username:"Varun",password:3},

// }
login(){
  // alert('login clicked');
  var id=this.id;
  var pswd=this.pswd;

  const result=this.ds.login(id,pswd)
  if(this.loginForm.valid){

  if(result){
    alert('Login successful')
    this.router.navigateByUrl('dashboard');
  }
  else{
    alert('Login failure')
    
  }


}
}
}