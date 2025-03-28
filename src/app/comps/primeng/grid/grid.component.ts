import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'prime-grid',
  imports: [
    TableModule
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {

}
