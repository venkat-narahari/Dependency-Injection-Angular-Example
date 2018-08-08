import { Component } from '@angular/core';
import { Component1 } from './component1.component';
import { Component2 } from './component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [Component1 , Component2]
})
export class AppComponent {
  title = 'dependecy-injection-app';
}
