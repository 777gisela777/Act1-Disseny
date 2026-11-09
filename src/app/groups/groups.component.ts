import { Component } from '@angular/core';
import { IdolsComponent } from '../idols/idols.component';
import { GROUPS } from '../groups';

@Component({
  imports: [IdolsComponent],
  selector: 'app-groups',
  standalone: true,
  styleUrl: './groups.component.css',
  templateUrl: './groups.component.html',
})
export class GroupsComponent {
  groups = GROUPS;
  selectedGroupId?: number;

  get selectedGroup() {
    return this.groups.find((group) => group.id === this.selectedGroupId);
  }

  onSelectGroup(id: number) {
    this.selectedGroupId = id;
  }
}