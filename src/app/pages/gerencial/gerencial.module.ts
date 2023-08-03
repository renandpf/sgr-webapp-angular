import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { GerencialRoutingModule, routedComponents } from './gerencial-routing.module';

const components = [];

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    GerencialRoutingModule,
  ],
  declarations: [...routedComponents, ...components],
})
export class GerencialModule {}
