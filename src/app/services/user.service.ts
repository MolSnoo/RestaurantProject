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
        let params = new HttpParams();
        params = params.append('email', user.email);
        params = params.append('password', user.password);
        return this.http.get<User>(`http://localhost:9000/login`, { params : params });
    }
}