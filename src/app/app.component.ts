import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { ProductsShowcaseComponent } from './products-showcase/products-showcase.component';
import { InfoSectionComponent } from './info-section/info-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent,
    MainContentComponent,
    BottomNavComponent,
    ProductsShowcaseComponent,
    InfoSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
