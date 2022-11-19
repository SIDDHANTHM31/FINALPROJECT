import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {}

  async getPlayer() {
    return await this.http.get('http://localhost:3000/').toPromise();
  }
}
