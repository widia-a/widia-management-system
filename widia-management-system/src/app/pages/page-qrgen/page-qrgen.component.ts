import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-qrgen',
  templateUrl: './page-qrgen.component.html',
  styleUrls: ['./page-qrgen.component.css']
})
export class PageQrgenComponent implements OnInit {

  inputQr: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
