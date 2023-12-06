import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Produto } from '../produto.model';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProdutoUpdateComponent } from '../produto-update/produto-update.component';

@Component({
  selector: 'app-produto-create',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, ProdutoUpdateComponent],
  templateUrl: './produto-create.component.html',
  styleUrl: './produto-create.component.css'
})
export class ProdutoCreateComponent implements OnInit {
  
  urlBase = " http://localhost:3001/produto"

  produto: Produto = {
    nome: '',
    valor: 0
  }

  constructor(private produtoService: ProdutoService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.produto.nome = params['nome'];
      this.produto.valor = Number(params['valor']);
      // Verifica se o parâmetro 'S' é igual a 'S'
      if (params['S'] === 'S') {
        this.criaProduto(this.produto); // Chama o método de criação do produto
      }
    });
  }

  cancela(): void {
    this.router.navigate(["/produtos"])
  }
  
  criaProduto(produto: Produto): void {
    this.http.post(this.urlBase.trim(), produto).subscribe(resposta => {
      console.log(resposta);
      this.produtoService.mostraMsg('Produto criado com sucesso!');
      this.router.navigate(["/produtos"]);
    }, erro => {
      console.log(erro);
      this.produtoService.mostraMsg('Erro ao criar produto!');
    });
  }
}
