import {Component, computed, Input, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-prime-input',
  imports: [
    InputText,
    ReactiveFormsModule,
    Button
  ],
  templateUrl: './prime-input.component.html',
  styleUrl: './prime-input.component.scss'
})
export class PrimeInputComponent implements OnInit{
  control: FormControl = new FormControl('Default');

  @Input()
  set startWith(nb: string){
    this._startWith = nb;
    this.control.setValue(this._startWith)
  };

  _startWith: string ='';

  ngOnInit() {
    this.control.setValue(this._startWith)
  }

}
