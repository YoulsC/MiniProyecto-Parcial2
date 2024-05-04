import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { DonadoresComponent } from './donadores/donadores.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AcercaComponent, DonadoresComponent, NosotrosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiniProyectoDos';
}
