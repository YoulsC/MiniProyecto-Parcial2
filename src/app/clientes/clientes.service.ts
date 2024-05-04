import { Injectable } from '@angular/core';
import { Cliente, Animal } from './cliente.model';
import { ANIMALES } from '../misanimales';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes!: Cliente[];
  animal: Animal[] = ANIMALES

  constructor() { 
    this.clientes = JSON.parse(localStorage.getItem('data') || '[]');
  }

  getAnimales(){
    return this.animal;
  }

  getClientes(){
    return this.clientes;
  }

  agregarCliente(cliente: Cliente){
    this.clientes.push(cliente);
    localStorage.setItem('data', JSON.stringify(this.clientes));
  }

  nuevoCliente(){
    return {
      id: this.clientes.length,
      fecha: new Date(),
      hora: 0,
      nombre: '',
      telefono: '',
    }
  }
}
