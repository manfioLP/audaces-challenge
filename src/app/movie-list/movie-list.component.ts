import { Component, OnInit } from '@angular/core';
import {Movie, MovieList} from '../../model/Movie'
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private login: string
  private password: string
  private userLoggedIn: string
  private showCard: boolean
  
  selectedMovie: Movie
  movies: MovieList[]
  constructor(
    private movieService: MovieService
  ) { 
    this.userLoggedIn = 'test'
    this.showCard = false
  }

  getMovies() {
    this.movieService.getMovies().subscribe(res => {
      let unsortedMovies = res.results
      unsortedMovies.sort((x: MovieList, y: MovieList) => {
        if(x.release_date > y.release_date) {
          return 1
        } else if (x.release_date < y.release_date) {
          return -1
        } else {
          return 0
        }
      })
      this.movies = unsortedMovies})
  }

  ngOnInit() {
    this.getMovies()
  }

}
