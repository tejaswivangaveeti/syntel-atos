import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dreamapp';
  cmp:string;
  city="Chennai";
  tech:string;
  constructor()
  {
    this.cmp="atos syntel pvt ltd";
    this.tech="angular";

  }
  hello()
  {
    console.log("hello all");
    alert("welcome stay safe")
  }
}
