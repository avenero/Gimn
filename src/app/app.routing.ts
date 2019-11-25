import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importados por mi
import { AdministradorComponent} from './components/administrador.component';
import { PrincipalComponent } from './components/principal.component';
import { SoldProductComponent } from './components/soldProduct.component';
import { UserComponent } from './components/user.component';

const appRoutes: Routes = [
  {path: '' , component: PrincipalComponent},
  {path: 'admin' , component: AdministradorComponent},
  {path: 'principal' , component: PrincipalComponent},
  {path: 'sold' , component: SoldProductComponent},
  {path: 'user' , component: UserComponent},
  {path: '**' , component: PrincipalComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
