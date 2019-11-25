import { Component } from '@angular/core';


@Component({
  selector: 'administrador',
  templateUrl: '../views/administrador.html'
})

export class AdministradorComponent{

  public titulo: string;

  constructor(){

    this.titulo = "Componente administrador";
  }

  ngOnInit(){

    console.log("componente funcionando");
  }
}
