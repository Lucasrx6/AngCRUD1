import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../template/nav/nav.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { CalculoComponent } from '../../gasolina/calculo/calculo.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gasolina',
  standalone: true,
  imports: [CommonModule, NavComponent, MatCardModule, MatButtonModule,
    FormsModule, MatFormFieldModule, MatInputModule, CalculoComponent, RouterModule],
  templateUrl: './gasolina.component.html',
  styleUrl: './gasolina.component.css'
})
export class GasolinaComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  chamarCalculo(){
    this.router.navigate(["gasolina/calculo"])
  }

}
