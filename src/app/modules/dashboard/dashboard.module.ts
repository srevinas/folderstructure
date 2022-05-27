import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstscreenComponent } from './pages/firstscreen/firstscreen.component';
import { SecondscreenComponent } from './pages/secondscreen/secondscreen.component';



@NgModule({
  declarations: [
    FirstscreenComponent,
    SecondscreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
