import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../route'
@Component({
  selector: 'app-transit-card',
  templateUrl: './transit-card.component.html',
  styleUrls: ['./transit-card.component.css']
})
export class TransitCardComponent implements OnInit {
  @Input() route: Route;
  constructor() { }

  ngOnInit(): void {
  }

}
