import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {API_BASE} from '../../api.config';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class UserService {
    public currentLanguage: BehaviorSubject<string> = new BehaviorSubject('en');
    constructor(private http: HttpClient) {
    }

    public reguser(data: any) {
        return this.http.post(`${API_BASE}/users`, {}, {params: data});
    }

    public contact(data: any) {
        return this.http.post(`https://ew2rqml437.execute-api.us-east-1.amazonaws.com/v1/contact`, data);
    }

    public reserve(data: any) {
        return this.http.post(`${API_BASE}/reservations`, {}, {params: data});
    }

    public getAllReservations() {
        return this.http.get(`${API_BASE}/reservations`);
    }
}
