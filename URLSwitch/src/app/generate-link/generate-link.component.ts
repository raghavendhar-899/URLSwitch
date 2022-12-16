import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-link',
  templateUrl: './generate-link.component.html',
  styleUrls: ['./generate-link.component.css']
})
export class GenerateLinkComponent {
  title = 'URLSwitch';
  newUrl = "";
  process = 0;

  submitUrl() {
    this.newUrl = "damn boy";
    this.process = 1;
  }
}
