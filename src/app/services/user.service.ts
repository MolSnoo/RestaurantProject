import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../classes/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    addUser(user: User): Observable<User> {
        return this.http.post<User>('http://localhost:9000/register', user);
    }

    loginUser(user: User): Observable<User> {
        console.log("loginUser");
        console.log(user);
        //var email = this.http.get<User>('http://localhost:9000/users').email;
        var email = user.email;
        var password = user.password;
        // if(email==user.email && password==this.http.get<User>('http://localhost:9000/users')) {
        // if(email==user.email && password==this.getValidation(user)) {
        if(email==user.email && password==user.password) {
            console.log("login successful");
            alert("Login successful");
        } else {
            console.log("Invalid email or password");
            alert("Invalid email or password");
        }
        return this.http.get<User>('http://localhost:9000/users');
        // user.email
        //return this.http.get<User>('http://localhost:9000/users');
        // return this.http.get<User>('http://localhost:9000/users', {responseType: "text"});
    }

    getValidation(user : User) {
        return this.http.get<User>('http://localhost:9000/users');
    }
}