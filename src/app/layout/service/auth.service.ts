import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, private http: HttpClient) {
    }


    authenticate(username: string,password: string): Observable< {token: string, userRole: string}  > {
        return this.http.post<{token: string, userRole: string}>('http://localhost:8080/authenticate',  {
            username: username,
            password: password
        });
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    logout(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
