import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage/landingPage.component';
import { OurMenuComponentComponent } from './our-menu-component/our-menu-component.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, OurMenuComponentComponent, HowToOrderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
