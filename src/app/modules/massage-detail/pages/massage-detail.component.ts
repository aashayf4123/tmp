import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-massage-component",
  templateUrl: "./massage-detail.component.html",
  styleUrls: ["./massage-detail.component.scss"],
})
export class MassageDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  masg = [
    {
      path: "manual-therapy",
      name: "Manuelle Therapie",
      description: "therapie1",
      pic: "../../../assets/img/Manuelle Therapie.jpeg",
    },
    {
      path: "electrotherapy",
      name: "Elektrotherapie",
      description: "therapie2",
      pic: "../../../assets/img/pics/_XT22959.jpg",
    },
    {
      path: "shockwave-therapy",
      name: "Stosswellentherapie",
      description: "therapie3",
      pic: "../../../assets/img/Stosswelletherapie.jpeg",
    },
    {
      path: "medical-training-therapy",
      name: "Medizinische Trainingstherapie",
      description: "therapie4",
      pic: "../../../assets/img/pics/_XT22851.jpg",
    },
    {
      path: "sports-physiotherapy",
      name: "Sportphysiotherapie",
      description: "therapie5",
      pic: "../../../assets/img/pics/_XT23054.jpg",
    },
    {
      path: "kinesio-taping",
      name: "Kinesio taping",
      description: "therapie6",
      pic: "../../../assets/img/Kinesiotape.jpeg",
    },
    {
      path: "trigger-point-therapy",
      name: "Triggerpunkttherapie",
      description: "therapie7",
      pic: "../../../assets/img/Triggerpunkttherapie.jpeg",
    },
    {
      path: "lymphatic-drainage",
      name: "Lymphdrainage",
      description: "therapie8",
      pic: "../../../assets/img/Lymphdrainage.jpeg",
    },
    {
      path: "neurologische-therapie",
      name: "Neurologische Therapie",
      description: "therapie9",
      pic: "../../../assets/img/pics/DSCF6406.jpg",
    },
    {
      path: "PNF",
      name: "PNF - Propriozeptive neuromuskuläre Fazilitation",
      description: "therapie10",
      pic: "../../../assets/img/pics/_XT22867.jpg",
    },
    {
      path: "",
      name: "Cognitive Funktional Therapie",
      description: "therapie11",
    },
    {
      path: "in-house-treatment",
      name: "Domizilbehandlung",
      description: "therapie12",
      pic: "../../../assets/img/domizibegandlung.jpeg",
    },
  ];

  prevent = [
    {
      path: "physiotherapeutic-consultation",
      name: "Physiotherapy advice",
      description: "prevention1",
      pic: "../../../assets/img/Beratung.jpeg",
    },
    {
      path: "massage-therapy",
      name: "Massage",
      description: "prevention2",
      pic: "../../../assets/img/Massage.jpeg",
    },
  ];

  about = [
    {
      path: "phylosophy",
      name: "Phylosophy",
      description: "phylosophy-detail",
      pic: "../../../assets/img/pics/_XT22856.jpg",
    },
    {
      path: "team",
      name: "Team",
      description: "about me-detail",
      pic: "../../../assets/img/pics/_XT23063-2.png",
      team1Description: "about second-detail",
      pic1: "../../../assets/img/pics/Katerina_Novotna.jpeg",
      pic2: "../../../assets/img/pics/Daniela.jpg",
      team2Description: "about third-detail",
    },
    {
      path: "team",
      name: "Team",
      team2Description: "about second-detail",
      pic2: "../../../assets/img/pics/Daniela.jpeg",
    },
  ];

  public val: any;
  public item: any;

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log(param.id);
      this.val = param.id;
      this.item =
        this.masg.find((x) => x.path == this.val) ||
        this.prevent.find((p) => p.path == this.val) ||
        this.about.find((x) => x.path == this.val);
      console.log(this.item);
    });
    // this.route.queryParams.subscribe(p => console.log(p));
  }
}
