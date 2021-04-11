import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'octranspo-tracker-v2';

  data:object = fetch( 'https://cors-anywhere.herokuapp.com/' + 'https://api.octranspo1.com/v1.3/GetRouteSummaryForStop?appID=c6bdedb8&apiKey=fad311a41e4945c3a0808625fe54179e&stopNo=3017&format=JSON')
  .then(response=>response.json()
  .then(data=>console.log(data))
  )
}
