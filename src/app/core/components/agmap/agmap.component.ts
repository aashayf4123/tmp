import {Component} from '@angular/core';

@Component({
    selector: 'app-agmap-component',
    templateUrl: './agmap.component.html',
    styleUrls: ['./agmap.component.scss']
})
export class AgmapComponent {
    lat = 47.430954;
    lng = 8.560090;
    zoom = 15;
    disejblskrol = false;
}
