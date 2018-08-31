import { Component, OnInit } from '@angular/core';
import { AuthServices } from './core/auth/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Field Pros Direct';
  isLoggedIn: boolean;
  constructor(private auth: AuthServices) { }

  ngOnInit() {
    this.auth.isLoggedIn.subscribe(logged => {
      this.isLoggedIn = logged;
      console.log(logged);
    });
  }
}
