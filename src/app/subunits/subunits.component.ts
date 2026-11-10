import { Component, input, output } from '@angular/core';
import { GROUPS } from '../groups';
import { SUBUNITS } from '../subunits';
import { SubunitComponent } from '../subMembers/subMembers.component';

type Subunits = (typeof SUBUNITS)[number];

@Component({
  selector: 'app-subunits',
  standalone: true,
  imports: [SubunitComponent],
  styleUrl: './subunits.component.css',
  templateUrl: './subunits.component.html',
})
export class SubunitsComponent {
  subunit = input.required<Subunits>();
  subunits = SUBUNITS;
  selectedSubunitId?: number;
  selected = input(false);
  select = output<number>();

  get selectedSubunit() {
    return this.subunits.find((subunit) => subunit.id === this.selectedSubunitId);
  }

  onSelectSubunit(id: number) {
    this.selectedSubunitId = id;
  }

}
