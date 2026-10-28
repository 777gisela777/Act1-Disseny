import { Component, input, output } from '@angular/core';
import { GROUPS } from '../groups';
import { SUBUNITS } from '../subunits';

type Subunits = (typeof SUBUNITS)[number];

@Component({
  selector: 'app-subunits',
  styleUrl: './subunits.component.css',
  templateUrl: './subunits.component.html',
})
export class SubunitsComponent {
  subunit = input.required<Subunits>();
  selected = input(false);
  select = output<number>();
}
