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
  selector: 'app-produto-delete',
  standalone: true,
  imports: [CommonModule, ProdutoReadComponent, RouterModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, HttpClientModule],
  templateUrl: './produto-delete.component.html',
  styleUrl: './produto-delete.component.css'
})
export class ProdutoDeleteComponent {

  urlBase = " http://localhost:3001/produto"


  produto: Produto = {
    nome: '',
    valor: 0
  };


  constructor(private produtoService: ProdutoService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {}

  readById(id: string): Observable <Produto> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Produto>(url)
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.readById(id).subscribe(produto => {
        this.produto = produto;
      });
    }
  }

delete(id: string): Observable<Produto>{
  const url = `${this.urlBase}/${id}`;
  return this.http.delete<Produto>(url);
}

deletaProduto(): void {
  const url = `${this.urlBase}/${this.produto.id}`;
  console.log(`Deletando produto com ID ${this.produto.id} na URL ${url}`);
  this.http.delete(url).subscribe(() => {
    console.log('Produto deletado com sucesso!');
    this.produtoService.mostraMsg('Produto deletado');
    this.router.navigate(["/produtos"]);
  }, erro => {
    console.log('Erro ao deletar produto:', erro);
  });
}

cancela(): void {
  this.router.navigate(["/produtos"])
}

}
