import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../types/reviewType';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ReviewService {
  constructor(private http: HttpClient) {}

  createReview(review: Review): Observable<any> {
    return this.http.post(`${environment.apiUrl}/reviews/create`, review);
  }

  getReview(setId: string): Observable<Review> {
    return this.http.get<Review>(`${environment.apiUrl}/reviews/get/${setId}`);
  }
}
