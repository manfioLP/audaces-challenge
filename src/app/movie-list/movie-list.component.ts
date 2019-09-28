import { Component, OnInit, Input } from '@angular/core';
import {Movie, MovieList} from '../../model/Movie'
import { MovieService } from '../movie.service';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [ MovieService, MovieList ]
})
export class MovieListComponent implements OnInit {

  private show: boolean
  private userLoggedIn: string
  private moviesTable: MatTableDataSource<MovieList[]>
  private columnsToDisplay: string[] = ['title', 'director', 'producer', 'release_date']
  selectedMovie: MovieList
  movies: MovieList[]

  @Input() public displayMovieForm: boolean
  constructor(
    private movieService: MovieService
  ) {
    this.displayMovieForm = false
    this.show = true
    this.userLoggedIn = 'test'
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
      this.moviesTable = new MatTableDataSource(unsortedMovies)})
  }

  openMovieForm(){
    this.displayMovieForm = true
    this.selectedMovie = null
  }

  rowClick(movie: MovieList) {
    if (!this.selectedMovie) {
      this.selectedMovie = movie
    } else {
      this.selectedMovie = this.selectedMovie.title === movie.title ? null : movie
    }
    this.displayMovieForm = false
  }

  filterMovie(filter: string) {
    this.moviesTable.filter = filter.trim()
  }

  getLoggedInUser() {
    this.userLoggedIn = history.state.data
  }

  closeMovieForm() {
    this.displayMovieForm = false
  }

  ngOnInit() {
    this.getMovies()
    this.getLoggedInUser()
  }

}
