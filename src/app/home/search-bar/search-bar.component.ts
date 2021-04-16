import { Component, OnInit } from '@angular/core';
import { TransitService } from '../../services/transit.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor(){
  }
  transitService = new TransitService();
  stopNo = ''
  handleSubmit(){
    console.log(this.transitService.GetNextTripsForStopAllRoutes(this.stopNo));
  }

  ngOnInit(): void {
  }

}
