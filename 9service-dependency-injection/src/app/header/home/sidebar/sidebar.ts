import { Component } from '@angular/core';
import { SubscriptionService } from '../../../services/subscription.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone:false,
  providers:[SubscriptionService] //bcoz SubscriptionService also exist in parent header ,also in child,so dependncy override will happen 
})
// a new instance of subcscription service will be created
export class Sidebar {

  constructor(private subscService1:SubscriptionService){

  }
  onSubClick(subType: string) {
    //1)  Add subscription  entry for user in db

    // 2) send mail to user for subscription confirmation

    // 3)Provide subscription functionality to user
    // alert(`Thank you for ${subType} subscription`)

    // instead of above use service
    // const subsc = new SubscriptionService()
    // subsc.onSubClick(subType)

    this.subscService1.onSubClick(subType)
  }
}
