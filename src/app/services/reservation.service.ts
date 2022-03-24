import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../classes/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getReservations(userId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:9000/reservations/' + userId);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>('http://localhost:9000/reservations', reservation);
  }
}
