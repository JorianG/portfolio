import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeConpetenceComponent } from '../badge-conpetence/badge-conpetence.component';
import { CommonModule } from '@angular/common';
import { LinkCompetenceComponent } from "../link-competence/link-competence.component";

interface Badge {
  textContent: string;
  bgColor: string;
  icon: string;
  size: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CardModule, CommonModule, LinkCompetenceComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() image: string = 'default-image.jpg'; // Default image path
  @Input() title: string = 'Default Title'; // Default title
  @Input() content: string = 'Default content description'; // Default content
  @Input() githubLink: string = '#'; // Default GitHub link
  @Input() competenceBadges: Badge[] = []; // New input for competence badges
  @Input() languages: string = '' // New input for competence badges
}
