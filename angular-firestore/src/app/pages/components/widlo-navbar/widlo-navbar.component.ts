import { Component, OnInit } from '@angular/core';
import { WidloService } from 'src/app/services/widlo.service';

@Component({
  selector: 'app-widlo-navbar',
  templateUrl: './widlo-navbar.component.html',
  styleUrls: ['./widlo-navbar.component.css']
})
export class WidloNavbarComponent implements OnInit {

  constructor(
    public widloService: WidloService
  ) { }

  ngOnInit(): void {

  }

  OnInit(): void{
    this.widloService.init();
  }

}
