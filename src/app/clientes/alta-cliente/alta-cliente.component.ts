import { Component } from '@angular/core';
import { Cliente, Animal } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from '../../calendario/calendario.component';
import { RouterLink } from '@angular/router';
import { UnanimalComponent } from '../../unanimal/unanimal.component';

@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [FormsModule, CalendarioComponent, RouterLink, UnanimalComponent], 
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent {

  cliente!: Cliente;
  animal!: Animal[];
  horasDisponibles: number[] = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ];

  horaSeleccionada: number = 0;

  constructor(private clientesService: ClientesService){}

    ngOnInit(){
      this.cliente = this.clientesService.nuevoCliente();
      this.animal = this.clientesService.getAnimales();
    }

    nuevoCliente(): void {
      this.clientesService.agregarCliente(this.cliente);
      this.cliente = this.clientesService.nuevoCliente();
    }

    onFechaSeleccionada(fecha: Date): void {
      this.cliente.fecha = fecha;

      
    }

}
