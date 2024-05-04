import { Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DonadoresComponent } from './donadores/donadores.component';
import { HomeComponent } from './home/home.component';
import { AnimalesComponent } from './animales/animales.component';
import { UnanimalComponent } from './unanimal/unanimal.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'animales', component: AnimalesComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'donadores', component: DonadoresComponent},
    {path: 'animal/:id', component: UnanimalComponent},

];
