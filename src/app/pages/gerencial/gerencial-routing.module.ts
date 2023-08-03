import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClienteComponent } from './cliente/list/list-cliente.component';
import { GerencialComponent } from './gerencial.component';
import { EditClienteComponent } from './cliente/edit/edit-cliente.component';

const routes: Routes = [{
  path: '',
  component: GerencialComponent,
  children: [{
    path: 'clientes',
    component: ListClienteComponent,
  },
  {
    path: 'clientes/edit',
    component: EditClienteComponent,
  },

],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerencialRoutingModule { }

export const routedComponents = [
  GerencialComponent,
  ListClienteComponent,
  EditClienteComponent,
];
