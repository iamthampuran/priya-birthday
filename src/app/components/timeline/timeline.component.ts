import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Moment {
  label: string;
  text: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  moments: Moment[] = [
    { label: 'how we met', text: 'The day our paths crossed and neither of us knew it would turn into this.' },
    { label: 'the first inside joke', text: 'Tandoori and PP 😌💖' },
    { label: 'the hard year', text: 'The stretch where you showed up for me without being asked. I noticed.' },
    { label: 'lately', text: 'Still one of my favorite people to text at 1am about nothing in particular.' }
  ];
}
