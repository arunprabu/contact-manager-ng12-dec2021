import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // interpolation related
  appName = "Contact Manager";
  teamSize = 7;

  // prop binding related
  companyName = "VFISLK";
  websiteURL = 'https://www.vfislk.com/';

  // two way binding related
  courseName = "Angular";

  // directives related
  isLoggedIn = true;
  skillList: string[] = ['html', 'css', 'ts', 'ng'];

  constructor() { 

  }

  ngOnInit(): void {

  }

  // event binding related
  handleClickMe(event: Event): void {
    alert("Clicked");
    console.log(event);
    // TODO: Change the button label to 'Clicked'
    // TODO: Learn about disabling the button
  }

}
