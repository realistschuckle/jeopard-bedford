import {
  Component, OnInit
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';

@Component({
  selector: 'app-clue-detail',
  templateUrl: './clue-detail.component.html',
  styleUrls: ['./clue-detail.component.scss']
})
export class ClueDetailComponent implements OnInit {
  public clue: Clue;

  constructor() {}

  public ngOnInit(): void {
    this.clue = {
      id: 105829,
      answer: 'fungus',
      question: 'Bv some measures, the largest organism isn\'t a blue whale, but a 2,385-acre Oregon mushroom, the \"humongous\" this',
      value: 600,
      invalid_count: 13,
      category: {
        id: 14285,
        title: 'contrary to popular belief'
      }
    };
  }
}
