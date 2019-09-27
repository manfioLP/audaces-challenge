import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'https://swapi.co/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };

  constructor(
    private http: HttpClient) { 
    }
  
  

  getMovies(): Observable<any> {
    return this.http.get<Movie[]>(`${this.moviesUrl}/films`)
      .pipe(
        tap(res => {}))
  }

  getMovie(id: number): Observable<any> {
    let episode_id = this.getEpisodeId(id)
    
    return this.http.get<Movie[]>(`${this.moviesUrl}/films/${episode_id}`)
      .pipe(
        tap(res => {})
      )
  }

  private getEpisodeId(id: number) {
    switch (id) {
      case 1: return 4;
      case 2: return 5;
      case 3: return 6;
      case 4: return 1;
      case 5: return 2;
      case 6: return 3;
      default:
        return id
    }
  }

}
