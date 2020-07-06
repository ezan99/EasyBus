import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, PopoverController, AlertController } from '@ionic/angular';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private start_location;
  private end_location;

  constructor(private router: Router, 
    private loadingCtrl: LoadingController, 
    private popoverCtrl: PopoverController, 
    private alertCtrl: AlertController, 
    private translate: TranslateService) { }
  currentDate: string = ''
  setValue() {
    this.currentDate = Date.toString();
  }

  

  ngOnInit() {
  }
  
  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons:['OK']
    });
    alert.present();
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event:ev
    });
    await popover.present();
  }
  
  showLoadingg(){
    this.loadingCtrl.create({
      message: "Please Wait..."
    }).then((loading) => {loading.present();

      setTimeout(() => {loading.dismiss();
      }, 4000)
    })
  }

  navigateSchedule(){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        start_location: JSON.stringify(this.start_location),
        end_location: JSON.stringify(this.end_location),
      }
    };


    this.router.navigate(['table'], navigationExtras);
  }
}
