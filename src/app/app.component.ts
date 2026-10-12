import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { EnvelopeComponent } from './components/envelope/envelope.component';
import { LetterComponent } from './components/letter/letter.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { VideoComponent } from './components/video/video.component';
import { CelebrateComponent } from './components/celebrate/celebrate.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    EnvelopeComponent,
    LetterComponent,
    GalleryComponent,
    TimelineComponent,
    VideoComponent,
    CelebrateComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
