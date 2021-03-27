import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent implements OnInit {
  show = false;
  log = [];

  ngOnInit(): void {}

  toggleDisplay() {
    this.show = !this.show;
    this.log.push(this.log.length + 1);
  }

  color() {
    return this.log.length > 4 ? 'green' : '';
  }
}
