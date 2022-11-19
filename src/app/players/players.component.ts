import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  firstname: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  data: any;
  name: string;
  score: number;
  async submit() {
    this.data = await this.http
      .post('http://localhost:3000/createPlayers', {
        name: 'morpheus',
        score: 2,
      })
      .toPromise();
    console.log(this.data);
  }
}
