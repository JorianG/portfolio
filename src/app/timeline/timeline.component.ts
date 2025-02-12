import { Component } from '@angular/core';
import { NgxTimelineModule, NgxTimelineOrientation } from '@frxjs/ngx-timeline';

interface NgxTimelineEvent {
  timestamp: Date;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  imports: [NgxTimelineModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  events: NgxTimelineEvent[] = [
    {
      timestamp: new Date('2022-06'),
      title: 'Obtention du Bacalauréat',
      description: 'Mention Bien. Lycée Philipe Lamour, Nîmes'
    },
    {
      timestamp: new Date('2022-09-01'),
      title: 'Entrée en BUT',
      description: 'IUT Paul Sabatier, Toulouse'
    },
    {
      timestamp: new Date('2024-04-27'),
      title: 'Stage développeur',
      description: 'Sigma Informatique, Labége'
    },
    {
      timestamp: new Date('2024-07-15'),
      title: 'Alternance développeur junior',
      description: 'Sigma Informatique, Labége'
    },
    {
      timestamp: new Date('2024-06-31'),
      title: 'Obtention du DUT',
      description: 'Mention Bien. IUT Paul Sabatier, Toulouse'
    },
    {
      timestamp: new Date('2025-06-31'),
      title: 'Future obtention du BUT',
      description: 'IUT Paul Sabatier, Toulouse'
    },

    // Ajoutez d'autres événements ici
  ];

  NgxTimelineOrientation = NgxTimelineOrientation;
}
