import { Component } from '@angular/core';
import { Appstyle } from '../CustomDirectives/appstyle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creating-custom-style-directive',
  imports: [Appstyle,CommonModule],
  templateUrl: './creating-custom-style-directive.html',
  styleUrl: './creating-custom-style-directive.scss',
})
export class CreatingCustomStyleDirective {}
