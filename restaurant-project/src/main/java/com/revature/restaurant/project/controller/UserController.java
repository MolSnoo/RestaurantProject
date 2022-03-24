package com.revature.restaurant.project.controller;

import com.revature.restaurant.project.entity.User;
import com.revature.restaurant.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
  @Autowired
  private UserService userService;

  @GetMapping("/users")
  public List<User> getUsers() {
    return userService.getAllUsers();
  }

  @GetMapping("/users/{id}")
  public User getUserById(@PathVariable("id") Long id) {
    return userService.getUserById(id);
  }

  @GetMapping("/login")
  public User getUserByCredentials(@RequestParam String email, @RequestParam String password) {
    return userService.getUserByCredentials(email, password);
  }

  @PostMapping("/register")
  public User addUser(@RequestBody User user) {
    return userService.addUser(user);
  }
}
