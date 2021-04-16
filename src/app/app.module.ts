import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransitService } from './services/transit.service';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { TransitDetailsComponent } from './home/transit-details/transit-details.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TransitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
