import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr>
      <app-menu></app-menu>
      <p class="redText" style="color: green;">Copyright 2021 | Arun</p>
      <p class="devUpdate">Happily built in the last week of Dec 2021</p>
    </footer>
  `,
  styles: [
    `
      .devUpdate{
        background: #eeeeee;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
