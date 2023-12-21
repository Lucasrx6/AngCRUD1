import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../../views/home/home.component';
import { ProdutocrudComponent } from '../../views/produtocrud/produtocrud.component';
import { RouterOutlet } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCreateComponent } from '../../produto/produto-create/produto-create.component';
import { MatButtonModule } from '@angular/material/button';
import { CalculadoraComponent } from '../../views/calculadora/calculadora.component';
import { CalendarioComponent } from '../../views/calendario/calendario.component';
import { GasolinaComponent } from '../../views/gasolina/gasolina.component';
import { CalculoComponent } from '../../gasolina/calculo/calculo.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, HomeComponent, ProdutocrudComponent, 
    RouterOutlet, RouterModule, ProdutoCreateComponent, MatButtonModule, CalculadoraComponent,
  CalendarioComponent, GasolinaComponent, CalculoComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
