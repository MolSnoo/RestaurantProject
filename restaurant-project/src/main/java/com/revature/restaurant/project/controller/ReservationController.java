package com.revature.restaurant.project.controller;

import com.revature.restaurant.project.entity.Reservation;
import com.revature.restaurant.project.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReservationController {
  @Autowired
  private ReservationService reservationService;

  @GetMapping("/reservations")
  public List<Reservation> getAllReservations() {
    return reservationService.getAllReservations();
  }

  @GetMapping("/reservations/{id}")
  public List<Reservation> getReservationsByUserId(@PathVariable("id") Long id) {
    return reservationService.getReservationsByUserId(id);
  }

  @PostMapping("/reservations")
  public Reservation addReservation(@RequestBody Reservation reservation) {
    return reservationService.addReservation(reservation);
  }

  @DeleteMapping("/reservations/{id}")
  public String deleteReservation(@PathVariable("id") Long id) {
    return reservationService.deleteReservation(id);
  }
}
