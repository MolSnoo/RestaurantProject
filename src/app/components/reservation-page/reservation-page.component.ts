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

  events: [object] = [{}];

  calendarOptions: CalendarOptions = {
    dateClick: this.handleDateClick.bind(this),
    events: this.events
  };

  date: string = "";
  reservationModel = new Reservation("", "", "", 1, 0);

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations(1).subscribe(reservations => {
      for (let reservation of reservations) {
        this.events.push({
          title: reservation.title,
          start: reservation.start,
          end: reservation.end
        });
      }
      this.events.push({});
    });
  }

  handleDateClick(arg: any) {
    this.date = arg.dateStr;
    this.events.splice(this.events.length - 1, 1, { title: 'reservation', date: arg.dateStr });
  }

  onFormSubmit() {
    let start = this.date + "T" + this.reservationModel.start + ":00.000";
    let endTime = new Date(start);
    endTime.setHours(endTime.getHours() + 1);
    let end = endTime.toISOString();
    end = end.substring(0, end.length - 1);

    this.reservationModel.title = "Reservation for " + this.reservationModel.seats;
    this.reservationModel.start = start;
    this.reservationModel.end = end;
    this.reservationModel.userId = 1;

    this.reservationService.addReservation(this.reservationModel).subscribe(response => {
      this.events.splice(this.events.length - 1, 1, {
        title: response.title,
        start: response.start,
        end: response.end
      });
      this.events.push({});
    });
  }

}
