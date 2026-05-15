import { Component } from '@angular/core';
import { SubscriptionService } from '../../../services/subscription.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  standalone:false
})
export class Hero {

  
  constructor(private subscService:SubscriptionService){

  }
  onSubClick(subType: string) {
    //1)  Add subscription  entry for user in db

    // 2) send mail to user for subscription confirmation

    // 3)Provide subscription functionality to user
    // alert(`Thank you for ${subType} subscription`)

    // instead of above use service
    // const subsc = new SubscriptionService()
    // subsc.onSubClick(subType)

    this.subscService.onSubClick(subType) 
  }
}
