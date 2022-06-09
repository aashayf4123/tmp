import {Component, OnInit} from '@angular/core';

import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-admin-table',
    templateUrl: './admin-table.component.html',
    styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {
    reservations: [];

    constructor(public userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getAllReservations().subscribe((data: any) => {
            this.reservations = data;
            console.log(this.reservations);
        });
    }
}
