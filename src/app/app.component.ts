import { Component } from '@angular/core';
import { ServicoReditService } from './servicios/servico-redit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public urlReddit = "http://reddit.com/r/mexico/.json";

  constructor(
    private ServicoReditService:ServicoReditService
  ){
  
  }
  
  consultaDatos(){
   
    this.ServicoReditService.consultar().subscribe(
      result =>{
        console.log(result);
        
      }
    )

    
  }


}
