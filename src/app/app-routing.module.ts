import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AuthGuardService } from './core/auth/Auth-guard-service ';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users',   loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuardService]  },
  { path: 'invoices',   loadChildren: './invoices/invoices.module#InvoicesModule', canActivate: [AuthGuardService]  },
  { path: 'line-items',   loadChildren: './line-items/line-items.module#LineItemsModule', canActivate: [AuthGuardService]  },
  { path: 'rules',   loadChildren: './rules/rules.module#RulesModule', canActivate: [AuthGuardService]  },
  // { path: 'tiers',  loadChildren: './tiers/tiers.module#TiersModule', canActivate: [AuthGuardService]  },
  {path : 'clients', loadChildren: './clients/clients.module#ClientsModule', canActivate: [AuthGuardService]  },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
