import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private events = new BehaviorSubject<any[]>([]);
  events$ = this.events.asObservable();

  addEvent(event: any) {
    this.events.next([...this.events.value, event]);
  }
  constructor() { }
}
