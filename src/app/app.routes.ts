import { Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { VideoComponent } from './video/video.component';
import { SubunitsComponent } from './subunits/subunits.component';
import { HomeComponent } from './home/home.component'
import { GalleryComponent } from './gallery/gallery.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AudioPlayerComponent } from './audio-player/audio.player.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'video',
        component: VideoComponent
    },
    {
        path: 'groups',
        component: GroupsComponent
    },
    {
        path: 'subunits',
        component: SubunitsComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'videoplayer',
        component: VideoPlayerComponent
    },
    {
        path: 'audioplayer',
        component: AudioPlayerComponent
    }    
];