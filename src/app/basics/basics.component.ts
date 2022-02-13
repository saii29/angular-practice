import {Component} from "@angular/core";


@Component({
  selector: '[app-basics]',
  templateUrl: 'basics.component.html',
  styleUrls: ['basics.component.css']
})
export class BasicsComponent {

  title: string;
  today: Date;

  constructor() {
    this.today = new Date();
    this.title = 'hello';
  }
}
