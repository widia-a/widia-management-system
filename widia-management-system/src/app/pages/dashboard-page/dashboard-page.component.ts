import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  daftarFitur: any = [
    {
      "title": "Product Management",
      "image": "https://picsum.photos/200/90?random=1",
      "link": ""
    },
    {
      "title": "User Management",
      "image": "https://picsum.photos/200/90?random=2",
      "link": ""
    },
    {
      "title": "Sales Management",
      "image": "https://picsum.photos/200/90?random=3",
      "link": ""
    },
    {
      "title": "Task Management",
      "image": "https://picsum.photos/200/90?random=4",
      "link": ""
    },
    {
      "title": "Content Management",
      "image": "https://picsum.photos/200/90?random=5",
      "link": ""
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
