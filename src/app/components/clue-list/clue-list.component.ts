import {
  Component, OnInit
} from '@angular/core';
import { Router } from '@angular/router';
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
  public isLoading: boolean;

  constructor(
    private service: ClueService,
    private router: Router
  ) {
    console.log('ClueList', this.service.myId);
  }

  public ngOnInit(): void {
    this._clues = [];
    this.getClues();
    this.service
      .isLoading()
      .subscribe(isLoading => this.isLoading = isLoading);
  }

  public goToNewForm(): void {
    this.router.navigate(['clues', 'new']);
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

  public deleteClue() {
    this.service
      .deleteClue(this.selectedClue.id)
      .subscribe(
        () => {
          this.getClues();
          this.selectedClue = undefined;
          this.isEditing = false;
        }
      );
  }

  public deselectClue(): void {
    this.selectedClue = undefined;
  }

  public handleClueClick(clue: Clue) {
    // navigate to /clues/:id
    // this.selectedClue = clue;
    this.router.navigate(['clues', clue.id]);
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
