import { Component, inject, input } from '@angular/core';
import { IDOLS } from '../idols';
import { SEIYUUS } from '../seiyuus';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

type View = 'idols' | 'seiyuus';

@Component({
  selector: 'app-idols',
  styleUrl: './idols.component.css',
  templateUrl: './idols.component.html',
})

export class IdolsComponent {
  name = input.required<string>();
  logo = input('');
  song = input.required<string>();
  video = input.required<string>();
  view: View = 'idols';
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

  get idols() {
    return IDOLS.filter((idol) => idol.mainGroup === this.name());
  }

  get seiyuus() {
    return SEIYUUS.filter((seiyuu) => seiyuu.mainGroup === this.name());
  }

  toggleView() {
    this.view = this.view === 'idols' ? 'seiyuus' : 'idols';
  }
}
