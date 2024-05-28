import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: ` <section>
    <div><app-navbar></app-navbar></div>
    <h1 class="fontRaleway">Sakura Ramen</h1>
    <h2>Best Ramen in City</h2>
  </section>`,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
