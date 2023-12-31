import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component'; 
import { FooterComponent } from './components/template/footer/footer.component'; 
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component'; 
import { ProdutocrudComponent } from './components/views/produtocrud/produtocrud.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { CalculadoraComponent } from './components/views/calculadora/calculadora.component';
import { CalendarioComponent } from './components/views/calendario/calendario.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { CalendarioCreateComponent } from './components/calendario/calendario-create/calendario-create.component';
import { GasolinaComponent } from './components/views/gasolina/gasolina.component';
import { CalculoComponent } from './components/gasolina/calculo/calculo.component';

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
    {path: "calendario", component: CalendarioComponent},
    {path: "produtos/create", component: ProdutoCreateComponent},
    {path: "produtos/produto-update/:id", component: ProdutoUpdateComponent},
    {path: "produtos/produto-delete/:id", component: ProdutoDeleteComponent},
    {path: "calendario/calendario-create", component: CalendarioCreateComponent},
    {path: "gasolina", component: GasolinaComponent},
    {path: "gasolina/calculo", component: CalculoComponent}
];
