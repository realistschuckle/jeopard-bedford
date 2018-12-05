import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Category } from '../domain/clue';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(
    private http: Http
  ) {}

  public createCategory(category: Category): Observable<Category> {
    return this.http
      .post('https://jservice.xyz/api/categories', category)
      .map(response => response.json());
  }
}
