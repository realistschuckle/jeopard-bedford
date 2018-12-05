import { NgModule } from '@angular/core';
import { ClueService } from './shared/services/clue.service';
import { CategoryService } from './shared/services/category.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [
    ClueService,
    CategoryService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
