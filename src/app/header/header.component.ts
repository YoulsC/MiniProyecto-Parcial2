import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AcercaComponent } from '../acerca/acerca.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { DonadoresComponent } from '../donadores/donadores.component';
import { AnimalesComponent } from '../animales/animales.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AcercaComponent, DonadoresComponent, NosotrosComponent, RouterModule, AnimalesComponent],
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
