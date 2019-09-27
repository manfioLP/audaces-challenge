import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'login', component: LandingComponent, data: { title: 'Página de login' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
