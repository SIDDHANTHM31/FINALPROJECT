import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure',
  template: ` <button>{{ value }}</button> `,
})
export class SqaureComponent {
  @Input() value: string;
}
