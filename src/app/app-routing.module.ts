import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'profile'},
  {path: 'newsfeed', component: NewsfeedComponent},
  {path: 'profile', component: ProfileComponent, loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
