import { Injectable } from '@angular/core';

@Injectable()
export class TransitService {
  private data;
  constructor() { }

 GetNextTripsForStopAllRoutes(stopNo: string){
    console.log(`Fetching GetNextTripsForStopAllRoutes for ${stopNo}`)
    fetch(`https://us-central1-oc-tracker.cloudfunctions.net/GetNextTripsForStopAllRoutes?stopNo=${stopNo}`)
    .then(async response => {
      this.setData(await response.json())
    });
  }

  setData(data){
    console.log(data)
    this.data = data;
  }

  getString(){
    return JSON.stringify(this.data);
  }

  getData(){
    return this.data;
  }

  clearData(){
    this.data = undefined;
  }

}