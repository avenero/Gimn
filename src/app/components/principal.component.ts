import { Component } from '@angular/core';

@Component({
selector: 'principal',
templateUrl: '../views/principal.html'

})

export class PrincipalComponent{
  public roles: string[];

  constructor(){
this.roles = ['Select','Aministrator','User'];
  }

  ngOnInit(){
    console.log(this.roles);

    }

}
