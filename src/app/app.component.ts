import {Component} from '@angular/core';
import {HostListener} from '@angular/core';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import {TranslateService} from '@ngx-translate/core';
import {UserService} from './core/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService, public userService: UserService) {
        this.innerWidth = window.innerWidth;

        translate.addLangs(['en', 'de']);
        translate.setDefaultLang('de');

        const browserLang = translate.getBrowserLang();
        this.userService.currentLanguage.next('de');
    }

    toggleAb: boolean;

    title = 'Physiotherapie Glattbrugg';

    innerWidth: any;

    showMenu: boolean;

    showSubMenu: boolean;

    showSubMenu1: boolean;


    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
        .pipe(
            map(result => result.matches),
            share()
        );

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
            path: 'cognitive-funktional-therapie',
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
            path: 'about-me',
            name: 'About me'
        },
        {
            path: 'practice',
            name: 'Practice'
        }
    ];

    lng: any[] = [
        {
            value: 'de',
            name: 'Deutsch',
            img: '../../../../assets/img/switzerland.png'
        },
        {
            value: 'en',
            name: 'English',
            img: '../../../../assets/img/english.png'
        }
    ];

    current: any = this.lng[0];

    langOpen: boolean;

    setLanguage(lang) {
        this.translate.use(lang.value);
        this.current = lang;
        this.userService.currentLanguage.next(lang.value);
    }

    toggleLang() {
        this.langOpen = !this.langOpen;
    }

    toggleAbout() {
        this.toggleAb = !this.toggleAb;
    }

    togle() {
        this.showMenu = !this.showMenu;
    }

    togleSubMenu() {
        this.showSubMenu = !this.showSubMenu;
    }

    togleSubMenu1() {
        this.showSubMenu1 = !this.showSubMenu1;
    }

    @HostListener('window:resize')
    public onResize(): void {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
    }


}
