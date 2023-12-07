import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CalendarioComponent } from '../../views/calendario/calendario.component';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-calendario-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ,HttpClientModule, MatDatepickerModule, MatNativeDateModule,MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './calendario-create.component.html',
  styleUrl: './calendario-create.component.css'
})
export class CalendarioCreateComponent {

  @Output() newEvent = new EventEmitter<any>();

  eventForm = this.fb.group({
    eventName: ['', Validators.required],
    eventDate: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private eventService: ServiceService) {}

  onSubmit() {
    if (this.eventForm.valid) {
      this.eventService.addEvent(this.eventForm.value);
      this.router.navigate(["/calendario"]);
    }
  }

  cancela(): void {
    this.router.navigate(["/calendario"])
  }

}
