import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-reservation-component',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

    constructor(private formBuilder: FormBuilder, public userservice: UserService) {
        this.reservation = this.formBuilder.group(
            {
                firstName: [null, Validators.required],
                phone: [null, Validators.required],
                email: [null, [Validators.required, Validators.email]],
                dateTime: [null, Validators.required],
                // treatment: [null, Validators.required],
                // note: [null, Validators.required]
            }
        );
        this.reservation.valueChanges.subscribe(V => console.log(V));
    }

    reservation: FormGroup;

    public myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0;
    };

    onSubmit() {
        console.log(this.reservation.value);
        this.userservice.reserve(this.reservation.value).subscribe(response => {
                console.log('Rispons', response);
                this.reservation.reset();
            },
            error1 => {
                console.log('greska neka :', error1);
            }
        );
    }
}
