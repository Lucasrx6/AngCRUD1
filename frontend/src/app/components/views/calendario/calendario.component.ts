import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { Calendar, CalendarOptions, EventInput } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // importação do plugin de interação
import { CalendarioCreateComponent } from '../../calendario/calendario-create/calendario-create.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../calendario/service.service';


@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FullCalendarModule, CalendarioCreateComponent, HttpClientModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {


  @Output() newEvent = new EventEmitter<any>();
  Events = []
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events:[],
    plugins: [dayGridPlugin, interactionPlugin]
  };
  

  onDateClick(res:{dateStr:string}){
    alert("Clique realizado: "+ res.dateStr)
  }
  
  constructor(private router: Router, private eventService: ServiceService) { }

  ngOnInit() {
    this.eventService.events$.subscribe(events => {
      this.calendarOptions.events = events;
    });
  }

  navegarAdicionaEvento(): void {
    this.router.navigate(["calendario/calendario-create"])
  }

}