import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgencyPageRoutingModule } from './agency-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { AgencyPage } from './agency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgencyPageRoutingModule,
    TranslateModule
  ],
  declarations: [AgencyPage]
})
export class AgencyPageModule {}
