import { Injectable } from '@angular/core';

@Injectable()
export class TransitService {
  private currentRoutes;
  private allRoutes;
  constructor() { }

 GetNextTripsForStopAllRoutes(stopNo: string){
    console.log(`Fetching GetNextTripsForStopAllRoutes for ${stopNo}`)
    fetch(`https://us-central1-oc-tracker.cloudfunctions.net/GetNextTripsForStopAllRoutes?stopNo=${stopNo}`)
    .then(async response => {
      this.setCurrentRoutes(await response.json())
    });
  }

  isOnlyRoute(){
    return Array.isArray(this.getCurrentRoutes().GetRouteSummaryForStopResult.Routes.Route);
  }

  setCurrentRoutes(currentRoutes){
    console.log(currentRoutes)
    this.currentRoutes = currentRoutes;
  }

  getCurrentRoutes(){
    return this.currentRoutes;
  }

  GetRouteSummaryForStop(stopNo: string){
    console.log(`Fetching GetRouteSummaryForStop for ${stopNo}`)
    fetch(`https://us-central1-oc-tracker.cloudfunctions.net/GetRouteSummaryForStop?stopNo=${stopNo}`)
    .then(async response => {
      this.setAllRoutes(await response.json())
    });
  }

  setAllRoutes(allRoutes){
    console.log(allRoutes)
    this.allRoutes = allRoutes;
  }

  getAllRoutes(){
    return this.allRoutes;
  }

}