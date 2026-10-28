import { Component, input, inject, output } from '@angular/core';
import { GROUPS } from '../groups';
import { SEIYUUS } from '../seiyuus';
import { IDOLS } from '../idols';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type View = 'idols' | 'seiyuus';

@Component({
  selector: 'app-subMembers',
  styleUrl: './subMembers.component.css',
  templateUrl: './subMembers.component.html',
})

export class SubunitComponent {
    name = input.required<string>();
    logo = input('');
    view: View = 'idols';
    song = input.required<string>();
    video = input.required<string>();
    color = input.required<string>();
    private sanitizer = inject(DomSanitizer);

      get videoId(): string {
        return this.view === 'idols' ? this.song() : this.video();
      }

      get videoUrl(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${this.videoId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`,
        );
      }

      belongsToSubunit(subunits: string): boolean {
        return subunits.split(',').some((subunit) => subunit.trim() === this.name());
      }

      get idols() {
        return IDOLS.filter((idol) => this.belongsToSubunit(idol.subunits));
      }

      get seiyuus() {
        return SEIYUUS.filter((seiyuu) => this.belongsToSubunit(seiyuu.subunits));
      }

      toggleView() {
        this.view = this.view === 'idols' ? 'seiyuus' : 'idols';
      }
}
