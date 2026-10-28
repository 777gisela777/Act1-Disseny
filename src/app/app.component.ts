import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GroupsComponent } from './groups/groups.component';
import { IdolsComponent } from './idols/idols.component';
import { GROUPS } from './groups';
import { VideoComponent } from './video/video.component';
import { VIDEOS } from './videos';
import { SubunitsComponent } from './subunits/subunits.component';
import { SubunitComponent } from './subMembers/subMembers.component';
import { SUBUNITS } from './subunits';

@Component({
  imports: [FooterComponent, HeaderComponent, GroupsComponent, IdolsComponent, VideoComponent, SubunitComponent, SubunitsComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = 'love-live-web';
  groups = GROUPS;
  video = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
  subunits = SUBUNITS;
  selectedGroupId?: number;
  selectedSubunitId?: number;
  groupVideo = VIDEOS;

  get selectedGroup() {
    return this.groups.find((group) => group.id === this.selectedGroupId);
  }

  onSelectGroup(id: number) {
    this.selectedGroupId = id;
  }

  get selectedSubunit() {
    return this.subunits.find((subunit) => subunit.id === this.selectedSubunitId);
  }

  onSelectSubunit(id: number) {
    this.selectedSubunitId = id;
  }
}
