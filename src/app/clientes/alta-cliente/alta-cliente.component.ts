import { Component, Input } from '@angular/core';
import { Cliente, Animal } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from '../../calendario/calendario.component';
import { RouterLink } from '@angular/router';
import { UnanimalComponent } from '../../unanimal/unanimal.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [FormsModule, CalendarioComponent, RouterLink, UnanimalComponent], 
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent {

  cliente!: Cliente;
  @Input() animal: any;

  horaSeleccionada: number = 0;

  horasDisponibles: number[] = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ];

  horasDeshabilitadas: number[] = [];

  constructor(private clientesService: ClientesService){}

  ngOnInit(){
    this.cliente = this.clientesService.nuevoCliente();

  }

    nuevoCliente(): void {
      this.cliente.animal = this.animal;
      this.cliente.hora = this.horaSeleccionada;
      this.clientesService.agregarCliente(this.cliente);
      this.cliente = this.clientesService.nuevoCliente();
    }

    onDateChange(date: Date | undefined) {
      if (date) {
        let aux:number = 0;
        this.horasDeshabilitadas = [];
        const storedData = JSON.parse(localStorage.getItem('data') || '[]');
        let formattedDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
        for(let i = 0; i < storedData.length; i++){
          if(storedData[i].fecha === formattedDate){
            let hora : number = parseInt(storedData[i].hora, 10);
            this.horasDeshabilitadas[aux] = hora;
            aux++;
          }
        }
        this.cliente.fecha = formattedDate;
      }
    }


}
