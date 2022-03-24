package com.revature.restaurant.project.repository;

import com.revature.restaurant.project.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
  @Query("select r from Reservation r where r.userId = ?1")
  List<Reservation> findByUserId(Long id);
}
