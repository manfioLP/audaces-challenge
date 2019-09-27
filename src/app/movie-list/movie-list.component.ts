import { Component, OnInit } from '@angular/core';
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
  private showCard: boolean
  private moviesTable: MatTableDataSource<MovieList[]>
  private columnsToDisplay: string[] = ['title', 'director', 'producer', 'release_date']
  
  selectedMovie: MovieList
  movies: MovieList[]
  constructor(
    private movieService: MovieService
  ) {
    this.show = true
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
      this.moviesTable = new MatTableDataSource(unsortedMovies)})
  }

  rowClick(movie: MovieList) {
    this.selectedMovie = movie
  }

  filterMovie(filter: string) {
    this.moviesTable.filter = filter.trim()
  }

  getLoggedInUser() {
    this.userLoggedIn = history.state.data
  }
  ngOnInit() {
    this.getMovies()
    this.getLoggedInUser()
    //this.show = false
  }

}
