import { Component, OnInit } from '@angular/core';
import { TransitService } from '../../services/transit.service';

@Component({
  selector: 'app-transit-details',
  templateUrl: './transit-details.component.html',
  styleUrls: ['./transit-details.component.css']
})
export class TransitDetailsComponent implements OnInit {
  transitService;
  constructor(transitService: TransitService) { 
    this.transitService = transitService;
  }

  ngOnInit(): void {
  }

}
