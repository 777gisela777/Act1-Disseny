import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
    selector:'app-video-player',
    standalone:true,
    templateUrl:'./video-player.component.html',
    styleUrl:'./video-player.component.css'
})

export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  // Només assignem les fonts quan el vídeo entra a la zona visible.
  @ViewChild('idolVideo') videoRef!: ElementRef<HTMLVideoElement>;
  videoVisible = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.activateVideo(); // Alternativa per a navegadors antics
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.activateVideo();
        this.observer?.disconnect();
      }
    }, { rootMargin: '100px' });
    this.observer.observe(this.videoRef.nativeElement);
  }

  private activateVideo(): void {
    this.videoVisible = true;
    const video = this.videoRef.nativeElement;
    // Assignació imperativa de fonts perquè el navegador les detecti immediatament.
    const mp4 = video.querySelector<HTMLSourceElement>('[data-format="mp4"]');
    const webm = video.querySelector<HTMLSourceElement>('[data-format="webm"]');
    if (mp4) mp4.src = '/video/Mari_Ohara_English_Class.mp4';
    if (webm) webm.src = '/video/Mari_Ohara_English_Class.webm';
    video.load();
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}