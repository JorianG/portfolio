import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-img',
  imports: [],
  templateUrl: './profile-img.component.html',
  styleUrl: './profile-img.component.scss'
})
export class ProfileImgComponent {
  @Input() size: number = 500; // Default size value
}
