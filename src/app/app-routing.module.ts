import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


const routes: Routes = [
  // { path: 'login', component: LoginComponent, data: { title: 'Página de login' } },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '', component: MovieListComponent},
  { path: 'movies', component: MovieListComponent},
  { path: 'detail/:id', component: MovieDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
