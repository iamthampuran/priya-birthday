import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Reason {
  text: string;
  rotate: number;
  tone: 'rose' | 'sage' | 'gold';
}

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.scss'
})
export class LetterComponent {
  reasons: Reason[] = [
    { text: 'the way you laugh, smile and make everyone around you feel at ease', rotate: -3, tone: 'rose' },
    { text: 'how you remember the small things about people', rotate: 2, tone: 'gold' },
    { text: 'your honesty, even when it\'s the harsh truth', rotate: -1.5, tone: 'sage' },
    { text: 'the way you show up for people, no questions asked', rotate: 3, tone: 'rose' },
    { text: 'your wonderful taste in snacks and clothes', rotate: -2, tone: 'gold' },
    { text: 'how you make ordinary days feel like plans worth keeping', rotate: 1.5, tone: 'sage' }
  ];
}
