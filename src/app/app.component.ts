import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDemo } from './button-demo/button-demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileImgComponent } from './profile-img/profile-img.component';
import { CardModule } from 'primeng/card';
import { ProjectCardComponent } from './project-card/project-card.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AccordionModule } from 'primeng/accordion';
import { BadgeConpetenceComponent } from "./badge-conpetence/badge-conpetence.component";
import { ButtonModule } from 'primeng/button';
import { LinkCompetenceComponent } from './link-competence/link-competence.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ProfileImgComponent, ProjectCardComponent, TimelineComponent, AccordionModule, BadgeConpetenceComponent, ButtonModule, LinkCompetenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  accordionValue: string | null = null;
  active: number =1;


  private isToggling: boolean = false;
  isDeveloping: boolean = false;
  isOptimizing: boolean = false;




  toggleAccordion(value: number) {
      if (this.isToggling) return; // Prevent further execution
      this.isToggling = true;


      console.log('Event:', event);
      console.log('Before:', this.active);
      // this.active = value;
      console.log('After:', this.active);

      // Reset the flag after a short delay
      setTimeout(() => {
          this.isToggling = false;
      }, 100); // Adjust the delay as needed
  
    let element = document.getElementById('competenceAccordion');
    if(element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    // setTimeout(() => {
    //   this.accordionValue = value.toString();
    // }, 1000);
    

  }
}
