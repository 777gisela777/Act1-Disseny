import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VIDEOS } from '../videos';

type Video = (typeof VIDEOS)[number];

@Component({
  selector: 'app-video',
  styleUrl: './video.component.css',
  templateUrl: './video.component.html',
})
export class VideoComponent {
  video = VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
  private sanitizer = inject(DomSanitizer);

  get videoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.video.link}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`,
    );
  }
}
