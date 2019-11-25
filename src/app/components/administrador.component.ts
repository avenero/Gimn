import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'administrador',
  templateUrl: '../views/administrador.html'
})

export class AdministradorComponent{

  name = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

 constructor(){}

  ngOnInit(){

    console.log("componente funcionando");
  }

  OnSubmit(){
    console.log(this.name.value);
  }
}
