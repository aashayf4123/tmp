import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-slider2-component',
    templateUrl: './slider2.component.html',
    styleUrls: ['./slider2.component.scss']
})
export class Slider2Component {
    @Input()
    slides: [];
}
