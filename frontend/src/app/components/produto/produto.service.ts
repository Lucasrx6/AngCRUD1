import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlBase = " http://localhost:3001/produto"

  constructor(private snackBar: MatSnackBar) { }

  mostraMsg(msg : string){
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
  

}


