import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-competence',
  templateUrl: './link-competence.component.html',
  styleUrls: ['./link-competence.component.scss']
})
export class LinkCompetenceComponent {
  @Input() toggleAccordion: (value: number) => void = () => {}; // Default no-op function

  onClick() {
    console.log('Button clicked!'); // Debugging line
    if (this.toggleAccordion) {
      this.toggleAccordion(0); // Change this value to the appropriate accordion panel index
    }
  }
}
