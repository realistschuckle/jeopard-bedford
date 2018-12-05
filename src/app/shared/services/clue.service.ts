import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Injectable } from '@angular/core';
import { Clue } from '../domain/clue';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClueService {

  constructor(
    private http: SkyAuthHttp
  ) {}

  public getClues(): Observable<Clue[]> {
    return this.http
      .get('https://jservice.xyz/api/clues')
      .map(response => response.json());
  }

}
