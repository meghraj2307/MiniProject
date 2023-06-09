import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  public getCustomers(){
    return this.http.get("http://localhost:8010/getAllCustomer");
  }
  public postMethod(user: User){
    return this.http.post("http://localhost:8010/insertCustomer",user,{responseType:'text'as 'json'});
  }
  public deleteData(id:number){
   
    return this.http.delete("http://localhost:8010/deleteCustomer/"+id);
  }
  public updateData(user:User){
    alert("update");
    return this.http.put("localhost:8010/updateCustomer",user);
  }
}
