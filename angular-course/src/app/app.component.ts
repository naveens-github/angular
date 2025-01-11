import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    /* we can define variable directly */
//   title = 'Angular course deep dive';

    /* We can create the multiple variables in an object */
    data ={
      title: 'Angular course deep dive'
    };

}
