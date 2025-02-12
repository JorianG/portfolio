import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-language',
  imports: [],
  templateUrl: './icon-language.component.html',
  styleUrl: './icon-language.component.scss'
})
export class IconLanguageComponent {
@Input() languageName: any;
@Input() iconPath: any;

}
