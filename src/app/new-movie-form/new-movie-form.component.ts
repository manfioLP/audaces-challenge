import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie, MovieList } from 'src/model/Movie';

@Component({
  selector: 'app-new-movie-form',
  templateUrl: './new-movie-form.component.html',
  styleUrls: ['./new-movie-form.component.css']
})
export class NewMovieFormComponent implements OnInit {

  private director: string
  private producer: string
  private title: string
  private episode_id: number
  private opening_crawl: string
  @Input() public displayMovieForm: boolean
  @Output() public displayMovieFormChange: EventEmitter<boolean>
  constructor() { 
    this.displayMovieForm = true
    this.displayMovieFormChange = new EventEmitter<boolean>()
  }

  addMovie(movie: Movie) {
    // should make request to add movie to server
    window.alert('Filme adicionado com sucesso! \n Esta informacao eh apenas para efeitos ludicos, o dado Nao esta persistindo (nenhuma requisicao feita para Adicionar Filmes).')
  }

  cancelAddMovie() {
    this.displayMovieForm = false
    this.displayMovieFormChange.emit(false)
  }

  ngOnInit() {
  }

}
