import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestantPage } from './contestant.page';

const routes: Routes = [
  {
    path: '',
    component: ContestantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestantPageRoutingModule {}
