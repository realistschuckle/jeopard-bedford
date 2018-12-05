import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';
import { SkyAuthHttp } from '@blackbaud/skyux-builder/runtime';
import { Clue } from '../../shared/domain/clue';
import { ClueService } from "../../shared/services/clue.service";

@Component({
  selector: 'app-clue-form',
  templateUrl: './clue-form.component.html',
  styleUrls: ['./clue-form.component.scss']
})
export class ClueFormComponent implements OnInit {
  public clue: Clue;

  @Output()
  public clueCreated: EventEmitter<Clue>;

  constructor() {
    this.clueCreated = new EventEmitter<Clue>();
  }

  public ngOnInit(): void {
   this.clue = new Clue();
  }

  public createClue() {
    this.clueCreated.next(this.clue);
  }
}
