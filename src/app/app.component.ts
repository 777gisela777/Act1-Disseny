import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@Component({
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MainComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Act1');
}
