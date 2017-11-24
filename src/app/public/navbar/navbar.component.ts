import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title = 'G';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public navigateTo(url: string): void {
    this.router.navigate([url])
      .then(() => {
        this.title = url;
      });
  }

}
