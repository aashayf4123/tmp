import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { UserService } from "../../../core/services/user.service";

declare const Calendly: any;

@Component({
  selector: "./app-buchen-component",
  templateUrl: "./reservations.component.html",
  styleUrls: ["./reservations.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReservationsComponent implements OnInit {
  @ViewChild("container", { static: true, read: false }) container: ElementRef;
  @ViewChild("container1", { static: true }) container1: ElementRef;
  public currentLanguage;
  public url;

  constructor(
    private translateService: TranslateService,
    private userService: UserService,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.userService.currentLanguage.subscribe((lang) => {
      this.currentLanguage = lang;
      if (lang === "de") {
        this.renderer.setStyle(
          this.container1.nativeElement,
          "display",
          "none",
        );
        this.initialCalendly(
          this.container.nativeElement,
          "https://onlinecalendar.medidoc.ch/BookAppointment?cgid=YGPbSfCp90y9lmSq_80Oyg",
        );
        this.renderer.setStyle(
          this.container.nativeElement,
          "display",
          "block",
        );
      } else {
        this.renderer.setStyle(this.container.nativeElement, "display", "none");
        this.renderer.setStyle(
          this.container1.nativeElement,
          "display",
          "block",
        );
        this.initialCalendly(
          this.container1.nativeElement,
          "https://onlinecalendar.medidoc.ch/BookAppointment?cgid=YGPbSfCp90y9lmSq_80Oyg",
        );
      }
    });
  }

  public initialCalendly(nativeElement: any, url: any) {
    Calendly.initInlineWidget({
      url: url,
      parentElement: nativeElement,
    });
  }
}
