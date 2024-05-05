import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AcercaComponent } from '../acerca/acerca.component';
import { DonadoresComponent } from '../donadores/donadores.component';
import { TipsComponent } from '../tips/tips.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AcercaComponent, DonadoresComponent, TipsComponent, RouterModule, MatIconModule],
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  buscarUnNombre (nombre: string) {
    this.router.navigate(['/buscador', nombre]);
  }
}
