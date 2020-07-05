import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../layout/service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(public router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    }


    get username() {
        return this.loginForm.get('username');
    }


    get password() {
        return this.loginForm.get('password');
    }


    login() {
        this.authService.authenticate(this.username.value, this.password.value).subscribe(
            (res: {token: string, userRole: string}) => {
                localStorage.setItem('token', res.token);
                localStorage.setItem('userRole', res.userRole);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('username', this.username.value);

                this.router.navigate(['../dashboard']);
                console.log(res);
            }
        )

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: null,
            password: null,
        })
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
