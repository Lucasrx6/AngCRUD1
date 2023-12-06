import { Observable } from 'rxjs';
import { ProdutoService } from './../produto.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Produto } from '../produto.model';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProdutoReadComponent } from '../produto-read/produto-read.component';


@Component({
  selector: 'app-produto-update',
  standalone: true,
  imports: [CommonModule, ProdutoReadComponent, RouterModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, HttpClientModule],
  templateUrl: './produto-update.component.html',
  styleUrl: './produto-update.component.css'
})
export class ProdutoUpdateComponent {


  produto: Produto = {
    nome: '',
    valor: 0
  };

  urlBase = " http://localhost:3001/produto"


  constructor(private produtoService: ProdutoService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {}

  readById(id: string): Observable <Produto> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Produto>(url)
  }

  update(produto: Produto): Observable <Produto> {
    const url = `${this.urlBase}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }


 ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.readById(id).subscribe(produto => {
      this.produto = produto;
    });
  }
}

atualizaProduto(): void {
  const url = `${this.urlBase}/${this.produto.id}`;
  console.log(`Atualizando produto com ID ${this.produto.id} na URL ${url}`);
  console.log(this.produto);
  this.http.put<Produto>(url, this.produto).subscribe(() => {
    console.log('Produto atualizado com sucesso!');
    this.produtoService.mostraMsg('Produto alterado');
    this.router.navigate(["/produtos"]);
  }, erro => {
    console.log('Erro ao atualizar produto:', erro);
  });
}

  cancela(): void {
    this.router.navigate(["/produtos"])
  }
}
