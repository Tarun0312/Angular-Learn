import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case-learn',
  imports: [CommonModule],
  templateUrl: './switch-case-learn.html',
  styleUrl: './switch-case-learn.scss',
})
export class SwitchCaseLearn {
  tabValue : string = ''
  changeTabValue(val : string){
    this.tabValue = val
  }
}
