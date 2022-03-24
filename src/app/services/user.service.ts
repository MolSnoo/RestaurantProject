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
        console.log("addUser");
        console.log(user);
        return this.http.post<User>('http://localhost:9000/register', user);
    }
}