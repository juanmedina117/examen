import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoReditService {

  public url = "http://reddit.com/r/mexico/.json";

  public httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type':'application/json'
    })
  };
  constructor(
    public _http:HttpClient
  ) {
    console.log("servicio inicializado");
    
   }
   consultar():Observable<any>{
    let header = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url,{headers:header})
    
    
  }
}
