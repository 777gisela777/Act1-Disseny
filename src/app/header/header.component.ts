import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
}