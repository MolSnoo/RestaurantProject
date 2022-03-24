package com.revature.restaurant.project.service;

import com.revature.restaurant.project.entity.Reservation;
import com.revature.restaurant.project.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {
  @Autowired
  private ReservationRepository reservationRepository;

  @Override
  public List<Reservation> getAllReservations() {
    return reservationRepository.findAll();
  }

  @Override
  public List<Reservation> getReservationsByUserId(Long userId) {
    return reservationRepository.findByUserId(userId);
  }

  @Override
  public Reservation addReservation(Reservation reservation) {
    return reservationRepository.save(reservation);
  }

  @Override
  public void deleteReservation(Long reservationId) {
    reservationRepository.deleteById(reservationId);
  }
}
