import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musicplayer';

 
msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
   
msaapPlaylist: Track[] = [
  {
    title: 'Audio One Title',
    link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    title: 'Audio Two Title',
    link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    title: 'Audio Three Title',
    link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
 {
    title: 'Audio Four Title',
    link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
 {
    title: 'Audio Five Title',
    link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
 {
    title: 'Audio Six Title',
    link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
]; 
}
