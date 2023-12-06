import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProdutoCreateComponent } from '../../produto/produto-create/produto-create.component';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Produto } from '../../produto/produto.model';
import { ProdutoReadComponent } from '../../produto/produto-read/produto-read.component';
import { ProdutoService } from '../../produto/produto.service';
import { ProdutoUpdateComponent } from '../../produto/produto-update/produto-update.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtocrud',
  standalone: true,
  imports: [CommonModule, MatCardModule, ProdutoCreateComponent,MatButtonModule, RouterModule, ProdutoReadComponent, ProdutoUpdateComponent, ],
  templateUrl: './produtocrud.component.html',
  styleUrl: './produtocrud.component.css'
})
export class ProdutocrudComponent implements OnInit {

  produto: Produto = {
    nome: '',
    valor: 0
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['nome'] && params['valor']) {
        this.produto.nome = params['nome'];
        this.produto.valor = Number(params['valor']);
      }
    });
  }

  navegarProdutoCreate(): void {
    this.router.navigate(["produtos/produto-create"])
  }
  

  navegarProdutoCreateQuerystring(): void {
    this.router.navigate(["produtos/produto-create"], { queryParams: { nome: 'Querystring Via parametro', valor: 100 } });
  }
  
}
