import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { TransitService } from '../../services/transit.service';

import  stopList from '../../../assets/stopList';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  transitService;
  stopNo: string = '';
  myControl = new FormControl();
  options: string[] = Object.keys(stopList);
  filteredOptions: Observable<string[]>;

  constructor(transitService : TransitService){
    this.transitService = transitService
  }
  async handleSubmit(){
    console.log(this.stopNo)
    this.transitService.GetNextTripsForStopAllRoutes(stopList[this.stopNo].stopNo)
    console.log(this.transitService.getData() !== undefined)
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
