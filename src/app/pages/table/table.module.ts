import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablePageRoutingModule } from './table-routing.module';

import { TablePage } from './table.page';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablePageRoutingModule,
    NgxDatatableModule,
    TranslateModule,
  ],
  declarations: [TablePage]
})
export class TablePageModule {}
