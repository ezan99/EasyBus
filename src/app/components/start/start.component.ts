import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(private router: Router, private loadingCtrl:LoadingController) { }

  ngOnInit() {}

  navigateToHomePage(){
    this.router.navigate(['home/feed']);
  }

  showLoading(){
    this.loadingCtrl.create({
      message: "Loading..."
    }).then((loading) => {loading.present();

      setTimeout(() => {loading.dismiss();
      }, 1000)
    })
  }

}
