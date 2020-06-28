import { Component, OnInit } from '@angular/core';
import { UserFlowService } from '../user-flow.service';
import { UserFlow } from '../models/UserFlow';
import { ModalController } from '@ionic/angular';
import { EnterPinComponent } from '../enter-pin/enter-pin.component';
import { PinDialog } from '@ionic-native/pin-dialog/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.page.html',
  styleUrls: ['./waiting.page.scss'],
  providers: [PinDialog]
})
export class WaitingPage {
  userFlow: UserFlow;
  loading: boolean = true;
  doneWithInput: boolean = false;
  howManyUsers: string = '';
  pin: string = '';

  constructor(private userFlowService: UserFlowService, public modalController: ModalController,
      private pinDialog: PinDialog, public platform: Platform) { }

  ionViewWillEnter() {
      this.loading = true;
      this.userFlow = this.userFlowService.getUserFlow();

      if(this.userFlow === UserFlow.TREBEK) {
          console.log('load how many users');
          this.loading = false;
      } else {
          console.log('load input');
          // this.platform.is('mobile') ? this.presentMobilePinpad() : this.presentWebPinpad();
          this.loading = false
      }
  }

  // async presentWebPinpad() {
  //     const modal = await this.modalController.create({
  //         component: EnterPinComponent,
  //         backdropDismiss: false
  //     });
  //     return await modal.present();
  // }
  //
  // async presentMobilePinpad() {
  //   this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
  //     .then(
  //       (result: any) => {
  //         if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
  //         else if(result.buttonIndex == 2) console.log('User cancelled');
  //       }
  //     )
  //     .catch(
  //       (err: any) => {
  //           console.log('Error getting pin dialog');
  //           console.log(err);
  //       }
  //     )
  // }

}
