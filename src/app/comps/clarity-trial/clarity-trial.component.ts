import {Component, computed, HostBinding, Input, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {FormControl} from '@angular/forms';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'clarity-trial',
  imports: [ClarityModule, InputText],
  templateUrl: './clarity-trial.component.html',
  styleUrl: './clarity-trial.component.scss'
})
export class ClarityTrialComponent implements OnInit {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  @Input()
  set startWith(nb: number){
    this._startWith = nb;
    this.count.set(nb ?? 0);
  };

  _startWith: number;

  ngOnInit() {
    this.count.set(this._startWith);
  }

  onLick() {
    this.count.update((val) => val + 5)
  }
}
