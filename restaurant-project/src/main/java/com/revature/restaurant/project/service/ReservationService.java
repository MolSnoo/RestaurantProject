package com.revature.restaurant.project.service;

import com.revature.restaurant.project.entity.Reservation;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReservationService {
  public List<Reservation> getAllReservations();
  public List<Reservation> getReservationsByUserId(Long userId);
  public Reservation addReservation(Reservation reservation);
  public void deleteReservation(Long reservationId);
}
