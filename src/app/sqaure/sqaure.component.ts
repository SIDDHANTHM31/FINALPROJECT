import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure',
  templateUrl: './sqaure.component.html',
  styleUrls: ['./sqaure.component.scss'],
})
export class SqaureComponent {
  @Input() value: string;
}
