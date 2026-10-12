import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celebrate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celebrate.component.html',
  styleUrl: './celebrate.component.scss'
})
export class CelebrateComponent {
  @ViewChild('burstLayer', { static: true }) burstLayer!: ElementRef<HTMLDivElement>;
  hasCelebrated = signal(false);

  private colors = ['#C97B84', '#CBA35C', '#8FA68E', '#EFD3D3', '#A85C68'];

  celebrate(): void {
    this.hasCelebrated.set(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const layer = this.burstLayer.nativeElement;
    const pieceCount = 48;

    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const left = Math.random() * 100;
      const duration = 2.4 + Math.random() * 1.8;
      const delay = Math.random() * 0.4;
      const size = 6 + Math.random() * 6;
      const rotate = Math.random() * 360;
      const isRound = Math.random() > 0.5;

      piece.style.left = `${left}%`;
      piece.style.width = `${size}px`;
      piece.style.height = `${size * (isRound ? 1 : 1.6)}px`;
      piece.style.background = color;
      piece.style.borderRadius = isRound ? '50%' : '2px';
      piece.style.animationDuration = `${duration}s`;
      piece.style.animationDelay = `${delay}s`;
      piece.style.transform = `rotate(${rotate}deg)`;

      layer.appendChild(piece);
      window.setTimeout(() => piece.remove(), (duration + delay) * 1000 + 200);
    }
  }
}
