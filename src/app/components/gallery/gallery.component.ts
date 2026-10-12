import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Photo {
  src: string;
  caption: string;
  rotate: number;
  lift: number;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  photos: Photo[] = [
    { src: 'assets/media/IMG_4167.JPEG', caption: 'one of my favorite people', rotate: -4, lift: 0 },
    { src: 'assets/media/1000080472.JPEG', caption: 'the birthday before this one', rotate: 3, lift: 18 },
    { src: 'assets/media/Snapchat-1063316896.jpg', caption: 'us, being ridiculous', rotate: -2, lift: -10 },
    { src: 'assets/media/Snapchat-440472989.jpg', caption: 'the sweetest kind of ordinary', rotate: 4, lift: 10 },
    { src: 'assets/media/Snapchat-371460383.jpg', caption: 'the good kind of chaos', rotate: -3, lift: -6 },
    { src: 'assets/media/1000080397.JPEG', caption: 'a favorite, honestly', rotate: 2, lift: 14 }
  ];

  onImgError(event: Event): void {
    const el = event.target as HTMLImageElement;
    el.classList.add('polaroid__img--missing');
  }
}
