import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent],
  imports: [
    CommonModule, FormsModule, IonicModule,TranslateModule
  ]
})
export class ComponentsModule { }
