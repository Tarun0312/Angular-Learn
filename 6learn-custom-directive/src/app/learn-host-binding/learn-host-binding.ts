import { Component } from '@angular/core';
import { AppHoverHostBinding } from '../CustomDirectives/app-hover-host-binding.directive';

@Component({
  selector: 'app-learn-host-binding',
  imports: [AppHoverHostBinding],
  templateUrl: './learn-host-binding.html',
  styleUrl: './learn-host-binding.scss',
})
export class LearnHostBinding {}
