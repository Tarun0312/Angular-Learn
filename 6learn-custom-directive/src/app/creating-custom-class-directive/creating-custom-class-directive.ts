import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomClass } from '../CustomDirectives/custom-class';

@Component({
  selector: 'app-creating-custom-class-directive',
  imports: [CommonModule,CustomClass],
  templateUrl: './creating-custom-class-directive.html',
  styleUrl: './creating-custom-class-directive.scss',
})
export class CreatingCustomClassDirective {}
