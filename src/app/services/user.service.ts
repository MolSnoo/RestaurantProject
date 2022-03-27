import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
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
        var passedemail = "";
        var passedpassword = "";
        // if(email==user.email && password==this.http.get<User>('http://localhost:9000/users')) {
        // if(email==user.email && password==this.getValidation(user)) {
        
        //changing params
        let params = new HttpParams().set('email', email,);
        passedemail = this.http.get<User>(`http://localhost:9000/login`, { params : params });
        params = new HttpParams().set('password', password,);
        passedpassword = this.http.get<User>(`http://localhost:9000/login`, { params : params });

        if(email==passedemail && password==passedpassword) {
            console.log("login successful");
            alert("Login successful");
        } else {
            console.log("Invalid email or password");
            alert("Invalid email or password");
        }
        // return this.http.get<User>('http://localhost:9000/login');

        // both params in 1
        // let params = new HttpParams();
        // params = params.append('email', email);
        // params = params.append('password', password);

        return this.http.get<User>(`http://localhost:9000/login`, { params : params });
        // return this.http.get<User>('http://localhost:9000/users');
        // return this.http.get<User>('http://localhost:9000/users', {responseType: "text"});
    }

    getValidation(user : User) {
        return this.http.get<User>('http://localhost:9000/login');
    }
}