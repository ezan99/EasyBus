import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.scss'],
})
export class AgencyPage implements OnInit {

  private agency;
  private schedule;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,    
    private translate: TranslateService) {     

    this.route.queryParams.subscribe(params => {
      if (params) {
        this.agency = JSON.parse(params.id);
        
        this.http.get(`http://bussapp.test/${this.agency}`)
          .subscribe(data => this.schedule = data.schedule)
      } else {

      //  Bo dns ktu, alert, ose error ska zgjedh asend /${this.agency}/
     }

    });

}


  ngOnInit() {
  }

}
