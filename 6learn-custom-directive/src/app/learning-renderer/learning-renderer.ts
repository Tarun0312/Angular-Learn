import { Component } from '@angular/core';
import { SetBackgroundUsingRenderer2 } from '../CustomDirectives/set-background-using-renderer2';

@Component({
  selector: 'app-learning-renderer',
  imports: [SetBackgroundUsingRenderer2],
  templateUrl: './learning-renderer.html',
  styleUrl: './learning-renderer.scss',
})
export class LearningRenderer {}
