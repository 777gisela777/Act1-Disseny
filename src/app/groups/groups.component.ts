import { Component, input, output } from '@angular/core';
import { GROUPS } from '../groups';

type Group = (typeof GROUPS)[number];

@Component({
  selector: 'app-groups',
  styleUrl: './groups.component.css',
  templateUrl: './groups.component.html',
})
export class GroupsComponent {
  group = input.required<Group>();
  selected = input(false);
  select = output<number>();
}