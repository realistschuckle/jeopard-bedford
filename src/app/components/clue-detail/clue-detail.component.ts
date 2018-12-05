import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';
import { ClueService } from "../../shared/services/clue.service";

@Component({
  selector: 'app-clue-detail',
  templateUrl: './clue-detail.component.html',
  styleUrls: ['./clue-detail.component.scss']
})
export class ClueDetailComponent implements OnChanges {
  // @Input()
  public clue: Clue;

  @Input()
  public clueId: string;

  @Output()
  public wantsClose: EventEmitter<void>;

  @Output()
  public wantsEdit: EventEmitter<void>;

  constructor(
    private service: ClueService
  ) {
    this.clue = new Clue();
    this.wantsClose = new EventEmitter<void>();
    this.wantsEdit = new EventEmitter<void>();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.service
      .getClue(changes.clueId.currentValue)
      .subscribe(clue => this.clue = clue);
  }

  public close(): void {
    this.wantsClose.next();
  }

  public closeForEdit(): void {
    this.wantsEdit.next();
  }
}
