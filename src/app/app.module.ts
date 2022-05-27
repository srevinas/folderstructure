import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentlayoutComponent } from './layouts/contentlayout/contentlayout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { ConfirmpopupComponent } from './shared/modals/confirmpopup/confirmpopup.component';
import { PipesPipe } from './shared/pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentlayoutComponent,
    HeaderComponent,
    SidenavComponent,
    CalendarComponent,
    ConfirmpopupComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
