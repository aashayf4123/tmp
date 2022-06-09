import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../../core/services/authentication.service';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    login: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private _auth: AuthenticationService,
        private router: Router
    ) {
        this.login = this.formBuilder.group(
            {
                username: [null, Validators.required],
                password: [null, Validators.required]
            }
        );
        this.login.valueChanges.subscribe(V => console.log(V));
    }

    checkLogin() {
        if (this.login.value.username === 'Physio2019' && this.login.value.password === 'password') {
            localStorage.setItem('auth', this.login.value.password);
            console.log('"jednako je"');
            this.router.navigate(['admin']);
        } else {
            alert('Nije jednako');
        }
    }
}
