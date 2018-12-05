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
      .get('https://jservice.xyz/api/clues?value=1000&category=12')
      .map(response => response.json());
  }

  public createClue(clue: Clue): Observable<Clue> {
    return this.http
      .post('https://jservice.xyz/api/clues', clue)
      .map(response => response.json());
  }

  public updateClue(clue: Clue): Observable<Clue> {
    return this.http
      .put(`https://jservice.xyz/api/clues/${clue.id}`, clue)
      .map(response => response.json());
  }

}
