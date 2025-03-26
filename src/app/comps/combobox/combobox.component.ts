import { Component } from '@angular/core';
import {ClrComboboxModule, ClrIconModule} from '@clr/angular';

@Component({
  selector: 'combobox',
  imports: [ClrComboboxModule, ClrIconModule],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.scss'
})
export class ComboboxComponent {
  states: string[] = ['chevre', 'mouton', 'chatton'];

}
