import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HackerNewsService]
    });
    service = TestBed.inject(HackerNewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that there are no outstanding requests
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve latest news IDs', () => {
    const mockNewsIDs = [1, 2, 3];

    service.getLatestNewsIDs().subscribe(ids => {
      expect(ids).toEqual(mockNewsIDs);
    });

    const req = httpMock.expectOne('https://hacker-news.firebaseio.com/v0/newstories.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockNewsIDs);
  });

  it('should retrieve news detail for a given ID', () => {
    const mockNewsDetail = { title: 'Test News', url: 'https://test-news.com', time: 1234567890 };
    const newsID = 123;

    service.getNewsDetail(newsID).subscribe(detail => {
      expect(detail).toEqual(mockNewsDetail);
    });

    const req = httpMock.expectOne(`https://hacker-news.firebaseio.com/v0/item/${newsID}.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockNewsDetail);
  });

});
