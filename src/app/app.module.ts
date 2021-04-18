import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransitService } from './services/transit.service';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { TransitListComponent } from './home/transit-list/transit-list.component';
import { TransitCardComponent } from './home/transit-list/transit-card/transit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    TransitListComponent,
    TransitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [TransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
