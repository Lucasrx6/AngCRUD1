import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, HttpClientModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  tela = '';

  constructor(private http: HttpClient) { }

  DigitoTela(value: string) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        this.tela += ' ' + value + ' ';
    } else {
        this.tela += value;
    }
}


  limparTela() {
    this.tela = '';
  }

  calculaResultado() {
    // Verifique se a tela contém um operador
    if (this.tela.includes('+') || this.tela.includes('-') || this.tela.includes('*') || this.tela.includes('/')) {
        // Separe a expressão em números e operação
        let numero1 = '', operacao = '', numero2 = '';
        for (let char of this.tela) {
            if (char === '+' || char === '-' || char === '*' || char === '/') {
                operacao = char;
            } else if (operacao === '') {
                numero1 += char;
            } else {
                numero2 += char;
            }
        }

        // Crie o objeto de cálculo
        const calculo = {
            Numero1: parseFloat(numero1),
            Numero2: parseFloat(numero2),
            Operacao: operacao
        };

          // Defina as opções da solicitação HTTP
          const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        // Faça uma solicitação POST para a API
        // Faça uma solicitação POST para a API
        this.http.post('http://localhost:5021/api/calculadora', JSON.stringify(calculo), httpOptions)
            .subscribe(
                resultado => {
                    // Exiba o resultado
                    this.tela = resultado.toString();
                },
                error => {
                    console.error('Erro ao calcular:', error);
                    if (error.error instanceof ErrorEvent) {
                        // Erro do lado do cliente ou erro de rede.
                        this.tela = 'Erro ao calcular. Por favor, verifique sua conexão de rede.';
                    } else {
                        // O backend retornou um código de resposta malsucedido.
                        // O corpo da resposta pode conter pistas sobre o que deu errado.
                        this.tela = `Erro ao calcular. Código de status do backend: ${error.status}`;
                    }
                }
            );
    } else {
        this.tela = 'Por favor, insira uma operação válida.';
    }
}

}
