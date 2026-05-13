import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-ng-if-working',
  imports: [CommonModule],
  templateUrl: './learn-ng-if-working.html',
  styleUrl: './learn-ng-if-working.scss',
})
export class LearnNgIfWorking {
  showPrivacy : boolean = false

  updatePrivacy(){
    this.showPrivacy = true
  }
}
