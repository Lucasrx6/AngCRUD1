import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProdutoCreateComponent } from '../../produto/produto-create/produto-create.component';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtocrud',
  standalone: true,
  imports: [CommonModule, MatCardModule, ProdutoCreateComponent,MatButtonModule, RouterModule, ],
  templateUrl: './produtocrud.component.html',
  styleUrl: './produtocrud.component.css'
})
export class ProdutocrudComponent {

  constructor(private router: Router) { }

  navigateToProdutoCreate(): void {
    this.router.navigate(["produtos/produto-create"])
  }

  
}
