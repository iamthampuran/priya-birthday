import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-envelope',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './envelope.component.html',
  styleUrl: './envelope.component.scss'
})
export class EnvelopeComponent {
  isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  scrollToLetter(): void {
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
  }
}
