import { Component, OnInit } from '@angular/core';
import { TransitService } from '../../services/transit.service';

@Component({
  selector: 'app-transit-list',
  templateUrl: './transit-list.component.html',
  styleUrls: ['./transit-list.component.css']
})
export class TransitListComponent implements OnInit {
  transitService;
  singleRoute= true;
  constructor(transitService: TransitService) { 
    this.transitService = transitService;
  }


  ngOnInit(): void {
  }

}
