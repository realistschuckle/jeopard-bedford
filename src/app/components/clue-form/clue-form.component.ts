import {
  Component, OnInit, EventEmitter, Output, Input
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';

@Component({
  selector: 'app-clue-form',
  templateUrl: './clue-form.component.html',
  styleUrls: ['./clue-form.component.scss']
})
export class ClueFormComponent implements OnInit {
  @Input()
  public clue: Clue;

  @Input()
  public isEditing: boolean;

  @Output()
  public wantsUpdate: EventEmitter<Clue>;

  @Output()
  public cancelUpdate: EventEmitter<void>;

  @Output()
  public pleaseDelete: EventEmitter<number>;

  constructor() {
    this.wantsUpdate = new EventEmitter<Clue>();
    this.cancelUpdate = new EventEmitter<void>();
    this.pleaseDelete = new EventEmitter<number>();
  }

  public ngOnInit(): void {
    if (!this.isEditing) {
      this.clue = new Clue();
    }
  }

  public createClue() {
    this.wantsUpdate.next(this.clue);
  }

  public cancelFormInteraction() {
    this.cancelUpdate.next();
  }

  public deleteTheClue() {
    this.pleaseDelete.next(this.clue.id);
  }
}
