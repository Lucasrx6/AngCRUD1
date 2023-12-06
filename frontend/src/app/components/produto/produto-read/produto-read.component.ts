import { Observable } from 'rxjs';
import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../produto.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Produto } from '../produto.model';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataSource } from '@angular/cdk/collections';
import { ProdutoRead2DataSource } from '../produto-read2/produto-read2-datasource';
import { MatTableModule } from '@angular/material/table';
import { ProdutoUpdateComponent } from '../produto-update/produto-update.component';
import { ProdutoDeleteComponent } from '../produto-delete/produto-delete.component';

@Component({
  selector: 'app-produto-read',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatTableModule, ProdutoUpdateComponent, ProdutoDeleteComponent],
  templateUrl: './produto-read.component.html',
  styleUrl: './produto-read.component.css'
})

export class ProdutoReadComponent {

  urlBase = " http://localhost:3001/produto"

  produtos: Produto[] = [];
  viewColunas = ['nome', 'valor', 'acao'];

  constructor(private produtoService: ProdutoService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.lerProduto();
  }

  lerProduto(): void {
    this.http.get<Produto[]>(this.urlBase).subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos);
    }, erro => {
      console.log(erro);
    });
  }








}
