import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats, MatNativeDateModule,
  NativeDateAdapter,
  provideNativeDateAdapter
} from '@angular/material/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DATEPICKER_VALIDATORS, MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import dayjs from 'dayjs';
import {ClarityTrialComponent} from './comps/clarity-trial/clarity-trial.component';
import {ComboboxComponent} from './comps/combobox/combobox.component';
import {PrimeInputComponent} from './comps/primeng/prime-input/prime-input.component';
import {Button} from 'primeng/button';
import {MultiSelectComponent} from 'gb-lib';

const format: MatDateFormats = {
  parse: {
    dateInput: "DD/MM/YYYY",
    timeInput: "DD/MM/YYYY HH:mm:ss"
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthLabel: "MM",
    monthYearLabel: "YYYY",
    timeInput: "DD/MM/YYYY HH:mm:ss",
    dateA11yLabel: "",
    timeOptionLabel: "",
    monthYearA11yLabel: ""
  }
}

const validate = (control) => {
  if (dayjs().isBefore(dayjs(control.value))) {
    return {err: true}
  }

  return null;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ClarityTrialComponent,
    ComboboxComponent, PrimeInputComponent, Button,
    MultiSelectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: MAT_DATE_FORMATS, useValue: format,
    }
  ]
})
export class AppComponent implements OnInit {
  title = 'date-omg';
  control: FormControl<Date | null>;

  constructor() {

    this.control = new FormControl(new Date("02/02/2024 00:00:00"), [validate]);
  }

  ngOnInit() {
    // this.control.setValue(new Date("02/02/2024 00:00:00"))
    this.control.valueChanges.subscribe(val => {
      console.log(val);
    })
  }


  toggleTheme() {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }
}
