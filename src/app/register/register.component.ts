import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

//properties
id:any;
uname:any;
pswd:any;
phno: any;
qfcn: any;
  userDetails: any;
// userDetails:any={
//   1:{id:1,username:"Jeeva",pswd:1,phno:99473837861,qualification:"Bsc cs"},
//   2:{id:2,username:"Amal",pswd:2,phno:9456783786,qualification:"Bsc chemistry"},
//   3:{id:3,username:"Varun",pswd:3,phno:9947456789,qualification:"BA"}

// }
  
constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

ngOnInit(): void { 

}

//model for register
registerForm=this.fb.group({
   id:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
   uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
   pswd:['',[Validators.required,Validators.pattern('[0-9]*')]],
   phno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   qfcn:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
})

//control passes through html
register(){

  var id=this.id;
  var uname=this.uname;
  var pswd=this.pswd;
  var phno=this.phno;
  var qfcn=this.qfcn
   var userDetails=this.ds.userDetails
  
 const result=this.ds.register(id,uname,pswd,phno,qfcn)
 if(this.registerForm.valid){

 
 if(result){
  alert('register successful')
  this.router.navigateByUrl('');
 }
 else{
  alert('register failure')
  console.log(this.registerForm.get('uname')?.errors);
  

 }
 }
}


}
