import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutfullComponent } from './layoutfull/layoutfull.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutfullComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
