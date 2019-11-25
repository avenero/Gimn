import { Component } from '@angular/core';


@Component({
  selector: 'usuario',
  templateUrl: '../views/user.html'
})

export class UserComponent{

  public titulo: string;

  constructor(){

    this.titulo = "Componente Usuario";
  }

  ngOnInit(){

    console.log("componente funcionando");
  }
}
