import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  tela = '';

  DigitoTela(value: string) {
    this.tela += value;
  }

  limparTela() {
    this.tela = '';
  }

  calculaResultado() {
    try {
      this.tela = eval(this.tela);
    } catch (error) {
      this.tela = 'Erro';
    }
  }
}



