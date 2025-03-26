import {Component, computed, HostBinding, Input, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'clarity-trial',
  imports: [ClarityModule],
  templateUrl: './clarity-trial.component.html',
  styleUrl: './clarity-trial.component.scss'
})
export class ClarityTrialComponent implements OnInit{
  count:  WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  @Input()
  startWith: number;

   ngOnInit() {
    this.count.set(this.startWith);
   }
   onLick(){
     this.count.update((val) => val + 5)
   }
}
