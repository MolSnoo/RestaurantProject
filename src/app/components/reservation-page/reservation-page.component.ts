import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Reservation } from 'src/app/classes/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  events: [any] = [{ id: -1 }];

  calendarOptions: CalendarOptions = {
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    events: this.events
  };

  date: string = "";
  reservationModel = new Reservation("", "", "", 1, 0);

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations(1).subscribe(reservations => {
      for (let reservation of reservations) {
        this.events.push({
          id: reservation.id,
          title: reservation.title,
          start: reservation.start,
          end: reservation.end
        });
      }
      this.events.push({ id: -1 });
    });
  }

  handleDateClick(arg: any) {
    this.date = arg.dateStr;
    this.events.splice(this.events.length - 1, 1, { id: -1, title: 'reservation', date: arg.dateStr });
  }

  handleEventClick(arg: any) {
    if (arg.event.id !== "-1") {
      if (window.confirm(`Cancel ${arg.event.title}?`)) {
        let i = 0;
        for (i; i < this.events.length; i++) {
          if (this.events[i].id.toString() === arg.event.id)
            break;
        }
        this.reservationService.deleteReservation(parseInt(arg.event.id)).subscribe(response => {
          this.events.splice(i, 1);
        });
      }
    }
  }

  onFormSubmit() {
    let start = this.date + "T" + this.reservationModel.start + ":00.000";
    let endTime = new Date(start);
    endTime.setHours(endTime.getHours() + 1);
    endTime.setMinutes(endTime.getMinutes() - endTime.getTimezoneOffset());
    let end = endTime.toISOString();
    end = end.substring(0, end.length - 1);

    this.reservationModel.title = "Reservation for " + this.reservationModel.seats;
    this.reservationModel.start = start;
    this.reservationModel.end = end;
    this.reservationModel.userId = 1;

    this.reservationService.addReservation(this.reservationModel).subscribe(response => {
      this.events.splice(this.events.length - 1, 1, {
        id: response.id,
        title: response.title,
        start: response.start,
        end: response.end
      });
      this.events.push({ id: -1 });
    });
  }

}
