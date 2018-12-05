import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Injectable } from '@angular/core';
import { Clue } from '../domain/clue';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ClueService {

  private _isLoading: BehaviorSubject<boolean>;
  public myId: number;

  constructor(
    private http: SkyAuthHttp
  ) {
    this._isLoading = new BehaviorSubject<boolean>(false);
  }

  public isLoading(): Observable<boolean> {
    return this._isLoading;
  }

  public getClue(id: string): Observable<Clue> {
    this._isLoading.next(true);
    return this.http
      .get(`https://jservice.xyz/api/clues/${id}`)
      .map(response => response.json())
      .do(() => this._isLoading.next(false))
      .catch((err: any) => {
        this._isLoading.next(false);
        return Observable.of(err);
      });
  }

  public getClues(): Observable<Clue[]> {
    this._isLoading.next(true);
    return this.http
      .get('https://jservice.xyz/api/clues?value=1000&category=12')
      .map(response => response.json())
      .do(() => this._isLoading.next(false))
      .catch((err: any) => {
        this._isLoading.next(false);
        return Observable.of(err);
      });
      // this.something.send(false);
  }

  public createClue(clue: Clue): Observable<Clue> {
    this._isLoading.next(true);
    return this.http
      .post('https://jservice.xyz/api/clues', clue)
      .do(() => this._isLoading.next(false))
      .catch((err: any) => {
        this._isLoading.next(false);
        return Observable.of(err);
      });
  }

  public updateClue(clue: Clue): Observable<Clue> {
    this._isLoading.next(true);
    return this.http
      .put(`https://jservice.xyz/api/clues/${clue.id}`, clue)
      .do(() => this._isLoading.next(false))
      .catch((err: any) => {
        this._isLoading.next(false);
        return Observable.of(err);
      });
  }

  public deleteClue(id: number): Observable<void> {
    this._isLoading.next(true);
    return this.http
      .delete(`https://jservice.xyz/api/clues/${id}`)
      .do(() => this._isLoading.next(false))
      .catch((err: any) => {
        this._isLoading.next(false);
        return Observable.of(err);
      });
  }

}
