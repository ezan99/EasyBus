import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  private agencies;

  constructor(public http: HttpClient, private router: Router) {

    this.http.get('http://bussapp.test/')
    .subscribe(data => {
      this.agencies = data;
    });


  }

  ngOnInit() {

  }



  navigateSchedule(id){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
      }
    };

    
    this.router.navigate(['agency'], navigationExtras);
  }

}
