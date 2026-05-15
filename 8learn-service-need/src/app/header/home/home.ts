import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-home',
  imports: [Sidebar,Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
