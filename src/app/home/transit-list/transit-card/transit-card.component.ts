import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../route'
@Component({
  selector: 'app-transit-card',
  templateUrl: './transit-card.component.html',
  styleUrls: ['./transit-card.component.css']
})
export class TransitCardComponent implements OnInit {
  @Input()
  get route(): Route { return this._route; }
  set route(route: Route) {
    this._route = route;
  }
  private _route = new Route()
  constructor() { 

  }

  ngOnInit(): void {
  }

  isOnlyTrip(){
    return !Array.isArray(this.route.Trips)
  }

}
