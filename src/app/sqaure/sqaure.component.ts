import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure',
  templateUrl: './sqaure.component.html',
})
export class SqaureComponent {
  @Input() value: string;
}
