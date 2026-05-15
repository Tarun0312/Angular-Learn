import { Component } from '@angular/core';
import { Home } from './home/home';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-header',
  imports: [Home],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  onSubClick(subType : string){
    //1)  Add subscription  entry for user in db

    // 2) send mail to user for subscription confirmation

    // 3)Provide subscription functionality to user
    // alert(`Thank you for ${subType} subscription`)
    
    // instead of above use service
    const subsc = new SubscriptionService()
    subsc.onSubClick(subType)


  }
}
