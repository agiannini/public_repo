
import { Component } from '@angular/core';


// Purpose:   To be the parent component which is used to load the web app
// Notes:     Calls on two components, app-navigation and app-table.
//            Uses the component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Rolodex Application';
  constructor() { }
}
