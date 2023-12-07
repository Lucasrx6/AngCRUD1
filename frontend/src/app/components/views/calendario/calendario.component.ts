import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // importação do plugin de interação



@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  Events = []
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin]
  };

  onDateClick(res:{dateStr:string}){
    alert("Clique realizado: "+ res.dateStr)
  }
  
  constructor() {}

  ngOnInit(){
    setTimeout(() => {
      this.calendarOptions = {
        dateClick:this.onDateClick.bind(this),
        events:this.Events
      }
    }, 3500)
  }


  }