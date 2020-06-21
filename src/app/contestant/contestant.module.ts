import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContestantPageRoutingModule } from './contestant-routing.module';

import { ContestantPage } from './contestant.page';
import { EnterPinComponent } from '../enter-pin/enter-pin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestantPageRoutingModule
  ],
  entryComponents: [EnterPinComponent],
  declarations: [ContestantPage, EnterPinComponent]
})
export class ContestantPageModule {}
