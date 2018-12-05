import {
  Component, OnInit
} from '@angular/core';
import { Category } from '../../shared/domain/clue';
import { CategoryService } from "../../shared/services/category.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  public category: Category;

  constructor(
    private service: CategoryService
  ) {}

  public createCategory(): void {
    this.service
      .createCategory(this.category)
      .subscribe();
  }

  public ngOnInit(): void {
    this.category = new Category();
  }
}
