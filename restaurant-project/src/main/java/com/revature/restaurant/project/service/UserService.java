package com.revature.restaurant.project.service;

import com.revature.restaurant.project.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
  public List<User> getAllUsers();
  public User getUserByCredentials(String email, String password);
  public User addUser(User user);
}
