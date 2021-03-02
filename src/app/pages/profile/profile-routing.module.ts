import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSearchComponent } from './new-search/new-search.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TaggedComponent } from './tagged/tagged.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'myalbums',
    pathMatch: 'full'
  },
  {
    path: 'myalbums',
    component: MyAlbumsComponent
  },
  {
    path: 'search',
    component: NewSearchComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'tagged',
    component: TaggedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
