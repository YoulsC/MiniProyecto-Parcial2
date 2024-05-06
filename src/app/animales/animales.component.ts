import { Component } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../shared/animal.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.css'
})
export class AnimalesComponent {

  misAnimales: Animal[] = [];

  constructor(public miservicio: AnimalService) {
    
  }

  ngOnInit(): void {
    this.misAnimales = this.miservicio.getAnimales();
  }

}

