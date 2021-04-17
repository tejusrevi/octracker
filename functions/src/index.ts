import * as functions from "firebase-functions";
import * as https from "https";

export const GetNextTripsForStopAllRoutes = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  if (request.query.stopNo == null){
    response.status(400).send({"message":"Missing stop number"})
  }
  https.get(`https://api.octranspo1.com/v2.0/GetNextTripsForStopAllRoutes?appID=${functions.config().octracker.appid}&apiKey=${functions.config().octracker.apikey}&stopNo=${request.query.stopNo}`, (res)=>{
    let rawData = '';  
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          response.send(parsedData);
        } catch (e) {
          response.status(400).send({"message":"OC Transpo server error"})
        }
      });
    })
 });

 export const GetRouteSummaryForStop = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  if (request.query.stopNo == null ){
    response.status(400).send({"message":"Missing stop"})
  }
  https.get(`https://api.octranspo1.com/v2.0/GetRouteSummaryForStop?appID=${functions.config().octracker.appid}&apiKey=${functions.config().octracker.apikey}&stopNo=${request.query.stopNo}`, (res)=>{
    let rawData = '';  
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          response.send(parsedData);
        } catch (e) {
          response.status(400).send({"message":"OC Transpo server error"})
        }
      });
    })
 });
