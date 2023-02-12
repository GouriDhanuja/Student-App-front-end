import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    1:{id:1,username:"Jeeva",pswd:1,phno:99473837861,qualification:"Bsc cs"},
    2:{id:2,username:"Amal",pswd:2,phno:9456783786,qualification:"Bsc chemistry"},
    3:{id:3,username:"Varun",pswd:3,phno:9947456789,qualification:"BA"}
  
  }

  constructor() { }



register(id:any,username:any,pswd:any,phno:any,qualification:any){

  var userDetails=this.userDetails
  
    if(id in this.userDetails){
      return false;
  
    }
    else{
      userDetails[id]={
        id:id,
        pswd:pswd,
        username:username,
        phno:phno,
       qualification:qualification
  
      }
  
      return true;
    }

  }
  login(id:any,pswd:any){
    var userDetails=this.userDetails;
    if(id in this.userDetails){
      if(pswd==this.userDetails[id]['pswd']){
        return true;
      }
      else{
        alert('invalid password')
        return false;
      }
    }
    else{
      alert('invalid userdetails')
      return false;
    }
  }


}




