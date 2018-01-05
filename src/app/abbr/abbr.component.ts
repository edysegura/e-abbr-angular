import { Component } from '@angular/core';

@Component({
  selector: 'app-abbr',
  template: `
    <input type="text" [value]="abbr" />
  `
})
export class AbbrComponent {
  abbr = 'HTML';
}
