import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';

@Component({
  selector: 'app-clue-detail',
  templateUrl: './clue-detail.component.html',
  styleUrls: ['./clue-detail.component.scss']
})
export class ClueDetailComponent {
  @Input()
  public clue: Clue;

  @Output()
  public wantsClose: EventEmitter<void>;

  @Output()
  public wantsEdit: EventEmitter<void>;

  constructor() {
    this.wantsClose = new EventEmitter<void>();
    this.wantsEdit = new EventEmitter<void>();
  }

  public close(): void {
    this.wantsClose.next();
  }

  public closeForEdit(): void {
    this.wantsEdit.next();
  }
}
