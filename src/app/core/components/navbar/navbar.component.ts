import {Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(public translate: TranslateService, public userService: UserService) {
    }

    toggler = false;
    toggler1 = false;

    langOpen: boolean;

    lng: any[] = [
        {
            value: 'de',
            name: 'Deutsch',
            img: '../../../../assets/img/switzerland.png'
        }
        ,
        {
            value: 'en',
            name: 'English',
            img: '../../../../assets/img/english.png'
        }
    ];

    current: any = this.lng[0];


    massages = [
        {
            path: 'manual-therapy',
            name: 'Manuelle Therapie'
        },
        {
            path: 'electrotherapy',
            name: 'Elektrotherapie'
        },
        {
            path: 'shockwave-therapy',
            name: 'Stosswellentherapie'
        },
        {
            path: 'medical-training-therapy',
            name: 'Medizinische Trainingstherapie'
        },
        {
            path: 'sports-physiotherapy',
            name: 'Sportphysiotherapie'
        },
        {
            path: 'kinesio-taping',
            name: 'Kinesio taping'
        },
        {
            path: 'trigger-point-therapy',
            name: 'Triggerpunkttherapie'
        },
        {
            path: 'lymphatic-drainage',
            name: 'Lymphdrainage'
        },
        {
            path: 'neurologische-therapie',
            name: 'Neurologische Therapie'
        },
        {
            path: 'PNF',
            name: 'PNF - Propriozeptive neuromuskuläre Fazilitation'
        },
        {
            path: '',
            name: 'Cognitive Funktional Therapie'
        },
        {
            path: 'in-house-treatment',
            name: 'Domizilbehandlung'
        }
    ];

    prevention = [
        {
            path: 'physiotherapeutic-consultation',
            name: 'Physiotherapy advice'
        },
        {
            path: 'massage-therapy',
            name: 'Massage'
        }
    ];
    about = [
        {
            path: 'phylosophy',
            name: 'Phylosophy'
        },
        {
            path: 'team',
            name: 'Team'
        },
        {
            path: 'practice',
            name: 'Practice'
        }
    ];

    toggleLang() {
        this.langOpen = !this.langOpen;
    }

    setLanguage(lang) {
        this.translate.use(lang.value);
        this.current = lang;
        this.userService.currentLanguage.next(lang.value);
    }

    toggle() {
        this.toggler = !this.toggler;
        if (this.toggler1 = false) {
            this.toggler1 = !this.toggler1;
        }
    }

    toggle1() {
        this.toggler1 = !this.toggler1;
        if (this.toggler = false) {
            this.toggler = !this.toggler;
        }
    }
}
