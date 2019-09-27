import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private login: string
  private password: string
  constructor(private router: Router) { }

  goToMovies(user: User) {
    this.router.navigate(['movies'], {state: {data: {user}}});
  }

  ngOnInit() {
  }

  onLogin() {
    if(this.login && this.password) {
      this.login = ''
      this.password = ''
      this.goToMovies({login: this.login})
    }
  }

}

interface User {
  login: string,
}
