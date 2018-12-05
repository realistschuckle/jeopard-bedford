import {
  Component, OnInit
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';
import { ClueService } from '../../shared/services/clue.service';

@Component({
  selector: 'app-clue-list',
  templateUrl: './clue-list.component.html',
  styleUrls: ['./clue-list.component.scss']
})
export class ClueListComponent implements OnInit {
  private _clues: Clue[];
  public selectedClue: Clue;
  public isEditing: boolean;

  constructor(
    private service: ClueService
  ) {}

  public ngOnInit(): void {
    this._clues = [];
    this.getClues();
  }

  public getClues() {
    this.service
      .getClues()
      .subscribe(
        clues => this._clues = clues.filter(clue => !clue.invalid_count), // success handler, I'll have some clues
        error => console.error(error) // error handler, something went wrong
      );
  }

  public updateClue(clue: Clue) {
    if (clue.id) {
      this.service
        .updateClue(clue)
        .subscribe(
          newClue => {
            this.getClues();
            this.selectedClue = undefined;
            this.isEditing = false;
          }
        );
    } else {
      this.service
        .createClue(clue)
        .subscribe(
          newClue => {
            this.getClues();
            this.selectedClue = undefined;
            this.isEditing = false;
          }
        );
    }
  }

  public showEdit() {
    this.isEditing = true;
  }

  public showDetails() {
    if (this.selectedClue.id) {
      this.isEditing = false;
    } else {
      this.selectedClue = undefined;
    }
  }

  public deselectClue(): void {
    this.selectedClue = undefined;
  }

  public handleClueClick(clue: Clue) {
    this.selectedClue = clue;
  }

  public showCreateForm() {
    this.selectedClue = new Clue();
    this.isEditing = true;
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
