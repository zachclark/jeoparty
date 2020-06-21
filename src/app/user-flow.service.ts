import { Injectable } from '@angular/core';
import { UserFlow } from './models/UserFlow';

@Injectable({
  providedIn: 'root'
})
export class UserFlowService {
  userFlow: UserFlow;

  constructor() { }

  setUserFlow(flow: UserFlow) {
      this.userFlow = flow;
  }
}
