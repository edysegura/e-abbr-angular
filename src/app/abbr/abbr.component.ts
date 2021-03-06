import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-abbr',
  template: `
    <input type="text" [(ngModel)]="abbr" />
    <p>Input: {{abbr}}</p>
  `
})
export class AbbrComponent {
  @Input() abbr = 'HTML';
}
