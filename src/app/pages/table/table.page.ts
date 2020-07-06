import { Component, OnInit } from '@angular/core';
// import data from '../../../assets/icon/company.json';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  private companies;
  private start_location;
  private end_location;

  tableStyle = 'bootstrap';
  constructor(public http: HttpClient, private route: ActivatedRoute, private router: Router) {     

      this.route.queryParams.subscribe(params => {
        if (params) {
          this.start_location = JSON.parse(params.start_location);
          this.end_location = JSON.parse(params.end_location);

          this.http.get(`http://bussapp.test/?start_location=${this.start_location}&end_location=${this.end_location}`)
          .subscribe(data => this.companies = data);
        } else {

        //  Bo dns ktu, alert, ose error ska zgjedh asend /${this.agency}/
       }

      });

  }

  switchStyle(){
    if(this.tableStyle == 'dark'){
      this.tableStyle = 'bootstrap';
    }
    else{
      this.tableStyle = 'dark';
    }
  }

  async open(row){
    console.log(row);
  }

  ngOnInit() {
  }

}
