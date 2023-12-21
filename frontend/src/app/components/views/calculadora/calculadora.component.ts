import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  tela = '';

  constructor(private http: HttpClient) { }

  DigitoTela(value: string) {
    this.tela += value;
  }

  limparTela() {
    this.tela = '';
  }

  calculaResultado() {
    // Separe a expressão em números e operação
    const [numero1, operacao, numero2] = this.tela.split(' ');

    // Crie o objeto de cálculo
    const calculo = {
      Numero1: parseFloat(numero1),
      Numero2: parseFloat(numero2),
      Operacao: operacao
    };

    // Faça uma solicitação POST para a API
    this.http.post('http://localhost:5000/api/calculadora', calculo)
      .subscribe(
        resultado => {
          // Exiba o resultado
          this.tela = resultado.toString();
        },
        error => {
          this.tela = 'Erro';
          console.error('Erro:', error);
        }
      );
  }
}



