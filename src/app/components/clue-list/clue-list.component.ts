import {
  Component, OnInit
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';
import { FAKE_DATA } from '../../shared/domain/fake-data';

@Component({
  selector: 'app-clue-list',
  templateUrl: './clue-list.component.html',
  styleUrls: ['./clue-list.component.scss']
})
export class ClueListComponent implements OnInit {
  private _clues: Clue[];
  public selectedClue: Clue;

  public ngOnInit(): void {
    this._clues = FAKE_DATA;
  }

  public handleClueClick(clue: Clue) {
    this.selectedClue = clue;
  }

  public get cluesOver200() {
    return this._clues.filter(clue => clue.value > 200);
  }

  public get clues(): Clue[] {
    return this._clues;
  }

  public someClues(): Clue[] {
    return this._clues;
  }
}
