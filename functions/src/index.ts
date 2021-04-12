import * as functions from "firebase-functions";
import * as https from "https";

export const GetNextTripsForStopAllRoutes = functions.https.onRequest((request, response) => {
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

 export const GetNextTripsForStop = functions.https.onRequest((request, response) => {
  if (request.query.stopNo == null || request.query.routeNo == null){
    response.status(400).send({"message":"Missing stop or route number"})
  }
  https.get(`https://api.octranspo1.com/v2.0/GetNextTripsForStop?appID=${functions.config().octracker.appid}&apiKey=${functions.config().octracker.apikey}&stopNo=${request.query.stopNo}&routeNo=${request.query.routeNo}`, (res)=>{
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
