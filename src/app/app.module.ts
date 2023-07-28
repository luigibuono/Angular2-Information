import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StartPageComponent } from './start-page/start-page.component';
import { HackerNewsService } from './services/hacker-news.service';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ HackerNewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
