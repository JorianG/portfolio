import { Component, Input } from '@angular/core';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-badge-conpetence',
  imports: [ChipModule],
  templateUrl: './badge-conpetence.component.html',
  styleUrl: './badge-conpetence.component.scss'
})
export class BadgeConpetenceComponent {
  @Input() textContent?: string;
  @Input() bgColor?: string;
  @Input() icon?: string;
  @Input() size: string = 'medium';
}
