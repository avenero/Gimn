import { Component } from '@angular/core';


@Component({
  selector: 'usuario',
  templateUrl: '../views/soldProduct.html'
})

export class SoldProductComponent{

  public titulo: string;

  constructor(){

    this.titulo = "Componente Usuario";
  }

  ngOnInit(){

    console.log("componente funcionando");
  }
}
