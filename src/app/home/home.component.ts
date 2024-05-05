import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  colorBase = '#18708c';

  centrar={
    display: 'flex',
    'flex-direction': 'column',
   'justify-content': 'center',
   'align-items': 'center',
   'text-align': 'center',
     
 };

}
