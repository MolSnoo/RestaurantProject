import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Reservation } from 'src/app/classes/reservation';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  events: [object] = [{}];

  calendarOptions: CalendarOptions = {
    dateClick: this.handleDateClick.bind(this),
    events: this.events
  };

  reservationModel = new Reservation("", "", null);

  constructor() { }

  ngOnInit(): void {
  }

  handleDateClick(arg: any) {
    this.reservationModel.date = arg.dateStr;
    this.events.push({ title: 'reservation', date: arg.dateStr });
  }

  onFormSubmit() {
    console.log(this.reservationModel);
  }

}
