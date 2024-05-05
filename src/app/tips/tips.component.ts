import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {
  displayedColumns = ['position', 'name', 'desc'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  desc: string;
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Identificación y Collar', desc: 'La identificación de tu perro lleva su nombre y la forma para contactarte. Si tu perro no lleva identificación y se pierde las consecuencias pueden ser fatales. El perro debe llevar ambos puestos todo el tiempo, incluso en la casa.'},
  {position: 2, name: 'Correa', desc: 'Al andar en la calle con tu perro sin correa lo expones a todo tipo de peligros, la correa te ayuda a controlar a tu perro y evita que se escape. Evita jalar demasiado la correa para que no lo lastimes.'},
  {position: 3, name: 'Arnés', desc: 'El arnés adecuado ayudará a que tu perro deje de tirar la correa constantemente.'},
  {position: 4, name: 'Comida', desc: 'La comida de tu perro es fundamental, pues influye en su salud, estado de ánimo y apariencia física. Invierte en comida y premios de calidad. Dale de comer dos o tres veces al día en horarios específicos.'},
  {position: 5, name: 'Un recipiente de agua y comida', desc: 'La mayoría de los perros se divierten mucho con juguetes. Utilízalos para ejercitar a tu perro, entrenarlo o dárselos como premios.'},
  {position: 6, name: 'Cama', desc: 'Todo perro necesita un espacio que sea suyo para descansar y alejarse de los demás si lo desea. Hay una gran variedad de camas para elegir de distintos tamaños y colores.'},
  {position: 7, name: 'Juguete', desc: 'La mayoría de los perros se divierten mucho con juguetes. Utilízalos para ejercitar a tu perro, entrenarlo o dárselos como premios.'},
  {position: 8, name: 'Artículos de acicalamiento', desc: 'Necesitas por lo menos shampoo para bañar a tu perro y un cepillo o peine para peinarlo. Dependiendo de las necesidades de su raza, puede necesitar corte de pelo y otros cuidados. Si le cortas las uñas o el pelo, abstente de utilizar productos para humanos y compra artículos específicamente para perros.'},
  {position: 9, name: 'Transportadora', desc: 'Es muy importante utilizarla cuando llevas a tu perro de un lugar a otro, pues contribuye a tu seguridad y la de tu mascota.'},

];
