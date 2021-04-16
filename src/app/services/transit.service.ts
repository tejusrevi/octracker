export class TransitService {
  constructor() {
    
  }
  GetNextTripsForStopAllRoutes(stopNo: string){
    console.log(`Fetching GetNextTripsForStopAllRoutes for ${stopNo}`)
    fetch(`https://us-central1-oc-tracker.cloudfunctions.net/GetNextTripsForStopAllRoutes?stopNo=${stopNo}`)
    .then(response => {
      response.json()
      .then(data =>{
        return data
      })
    });
  }
}