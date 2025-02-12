import { Component } from '@angular/core';
import { NavbarModule, ContainerComponent, NavbarNavComponent  } from '@coreui/angular'
import { Button } from 'primeng/button';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { ProfileImgComponent } from '../profile-img/profile-img.component';

@Component({
  selector: 'app-navbar',
  imports: [NavbarModule, ContainerComponent, Button, NavbarNavComponent, NavItemComponent, ProfileImgComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
