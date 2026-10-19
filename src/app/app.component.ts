import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HomeComponent, FormComponent, PortfolioComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('Act1');
}
