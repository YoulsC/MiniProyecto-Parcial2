import { Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { DonadoresComponent } from './donadores/donadores.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'donadores', component: DonadoresComponent},

];
