import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { TransitService } from '../../services/transit.service';

import  stopList from '../../../assets/stopList';
import  MapStyle from '../../../assets/mapStyle';

import { Loader } from "@googlemaps/js-api-loader";

var API_KEY = ""

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  transitService;
  stopNo: string = '';
  submitDisabled: boolean = true;
  myControl = new FormControl();
  options: string[] = Object.keys(stopList);
  filteredOptions: Observable<string[]>;

  constructor(transitService : TransitService){
    this.transitService = transitService


    const loader = new Loader({
      apiKey: API_KEY,
      version: "weekly"
    });
    loader.load().then(() => {
      let map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 45.4231351, lng: -75.6992651},
        zoom: 16,
        minZoom: 15,
        styles: MapStyle,
        mapTypeControl: false,
        streetViewControl: false
      });

      for (const [key, value] of Object.entries(stopList)) {
        let marker = new google.maps.Marker({
          position:  { lat: value.lat, lng: value.lng },
          map,
          title: key,
        });
        google.maps.event.addListener(marker, 'click', ()=>this.handleMarkerClick(value.stopNo));
      }
    });

  }
  async handleSubmit(){
    //this.transitService.GetRouteSummaryForStop(stopList[this.stopNo].stopNo)
    this.transitService.GetNextTripsForStopAllRoutes(stopList[this.stopNo].stopNo)
  }

  async handleMarkerClick(stopNo){
    //this.transitService.GetRouteSummaryForStop(stopList[this.stopNo].stopNo)
    this.transitService.GetNextTripsForStopAllRoutes(stopNo)
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );


  }

  private _filter(value: string): string[] {
    if (value.length < 3) return []
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
