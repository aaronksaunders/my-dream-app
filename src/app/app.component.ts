import { Component } from '@angular/core';


@Component({
  selector: 'app-root-child',
  template: `
    <p class="">this is a small component</p>
`
})

export class NewComponent {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works even better';
}
