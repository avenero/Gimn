import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador.component';
import { PrincipalComponent } from './components/principal.component';
import { SoldProductComponent } from './components/soldProduct.component';
import { UserComponent } from './components/user.component';
import { PruebaComponent } from './components/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    PrincipalComponent,
    SoldProductComponent,
    UserComponent,
    PruebaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
