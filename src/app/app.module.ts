import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HighlightPipe } from './highlight.pipe';
import { WordlistComponent } from './wordlist/wordlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    WordlistComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
