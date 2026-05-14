import { Component, signal } from '@angular/core';
import { ParentComponent } from './parent-component/parent-component';
import { Sibling } from './sibling/sibling';

@Component({
  selector: 'app-root',
  imports: [ParentComponent,Sibling],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learn-view-encapsulation');
}
