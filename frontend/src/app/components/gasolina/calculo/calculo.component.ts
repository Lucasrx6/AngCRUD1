import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../template/nav/nav.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GasolinaComponent } from '../../views/gasolina/gasolina.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculo',
  standalone: true,
  imports: [CommonModule, NavComponent, MatCardModule, MatButtonModule, FormsModule, 
    MatFormFieldModule, MatInputModule, RouterModule, GasolinaComponent],
  templateUrl: './calculo.component.html',
  styleUrl: './calculo.component.css'
})
export class CalculoComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  cancela(): void {
    this.router.navigate(["/gasolina"])
  }
}
