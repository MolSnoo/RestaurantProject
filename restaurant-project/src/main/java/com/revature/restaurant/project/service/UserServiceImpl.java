package com.revature.restaurant.project.service;

import com.revature.restaurant.project.entity.User;
import com.revature.restaurant.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
  @Autowired
  private UserRepository repository;

  @Override
  public List<User> getAllUsers() {
    return repository.findAll();
  }

  @Override
  public User getUserByCredentials(String email, String password) {
    return repository.findByEmailAndPassword(email, password);
  }

  @Override
  public User addUser(User user) {
    return repository.save(user);
  }
}
