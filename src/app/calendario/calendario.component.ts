import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MM/DD/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',

  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: NativeDateAdapter}
  ]
})

export class CalendarioComponent implements AfterViewInit {
  @ViewChild('picker') picker!: MatDatepicker<Date>;

  @Input() fecha: Date = new Date();

  @Output() fechaChange = new EventEmitter<Date>();

  myFilter = (d: Date | null): boolean => {
    if (!d) return false; // Si no se ha seleccionado ninguna fecha, se deshabilita.

    const disabledDays = [16, 25]; // Días a deshabilitar (por ejemplo, 1 de enero y 25 de diciembre)

    const day = d.getDate();
    const month = d.getMonth() + 1; // getMonth() devuelve 0 para enero, por lo que sumamos 1.

    // Verificar si el día y el mes coinciden con los días deshabilitados.
    return !disabledDays.some((disabledDay) => {
        return day === disabledDay && month === 5; // Ejemplo: 1 de enero
    });
  };

  constructor(private dateAdapter: DateAdapter<Date>) { }

  escogerFecha(): void {
    this.fechaChange.emit(this.fecha);
  }

  ngAfterViewInit() {
    // Configura la fecha mínima en el mat-datepicker para ser la fecha actual
    const today = new Date();
    this.picker.datepickerInput.min = today;
  }
}
