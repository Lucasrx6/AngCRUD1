import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component'; 
import { FooterComponent } from './components/template/footer/footer.component'; 
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component'; 
import { ProdutocrudComponent } from './components/views/produtocrud/produtocrud.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { CalculadoraComponent } from './components/views/calculadora/calculadora.component';
import { CalendarioComponent } from './components/views/calendario/calendario.component';

export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'nav', component: NavComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'header/:id', component: HeaderComponent},
    {path: 'nav', component: NavComponent},
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "produtos", component: ProdutocrudComponent},
    {path: "produtos/produto-create", component: ProdutoCreateComponent},
    {path: "calculadora", component: CalculadoraComponent},
    {path: "calendario", component: CalendarioComponent}

];
