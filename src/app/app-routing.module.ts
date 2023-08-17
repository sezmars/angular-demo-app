import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./pages/user-list/user-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: UserListComponent},
  {
    path: 'profile/:uuid', loadComponent: () => import('./pages/user-profile/user-profile.component')
      .then(m => m.UserProfileComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
