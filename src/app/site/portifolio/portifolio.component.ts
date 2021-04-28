import { Component, OnInit } from '@angular/core';
import AOS from 'aos'
@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
