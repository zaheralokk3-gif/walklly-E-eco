import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer.component/footer.component';

@Component({
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  selector: 'app-blank.component',
  styleUrl: './blank.component.scss',
  templateUrl: './blank.component.html',
})
export class BlankComponent {}
