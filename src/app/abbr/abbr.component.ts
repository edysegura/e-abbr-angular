import { Component } from '@angular/core';

@Component({
  selector: 'app-abbr',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="abbr" />
  `
})
export class AbbrComponent {
  abbr = 'HTML';

  onUserInput(event) {
    this.abbr = event.target.value;
  }
}
