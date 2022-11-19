import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqaureComponent } from './sqaure/sqaure.component';
import { BoardComponent } from './board/board.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players/players.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SqaureComponent,
    BoardComponent,
    PlayersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
