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
  public clues: Clue[];

  public ngOnInit(): void {
    this.clues = FAKE_DATA;
  }
}
