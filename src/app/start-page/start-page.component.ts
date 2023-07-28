import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../services/hacker-news.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  newsList: any[] = [];
  currentPage: number = 0;
  newsPerPage: number = 10;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.hackerNewsService.getLatestNewsIDs().subscribe(ids => {
      const startIndex = this.currentPage * this.newsPerPage;
      const endIndex = startIndex + this.newsPerPage;
      const newsIDsToShow = ids.slice(startIndex, endIndex);

      for (const id of newsIDsToShow) {
        this.hackerNewsService.getNewsDetail(id).subscribe(newsDetail => {
          this.newsList.push(newsDetail);
        });
      }
    });
  }

  onLoadMore(): void {
    this.currentPage++;
    this.loadNews();
  }
}
