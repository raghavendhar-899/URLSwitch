import { Component } from '@angular/core';
import { FirebaseComponent } from '../firebase/firebase.component';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generate-link',
  templateUrl: './generate-link.component.html',
  styleUrls: ['./generate-link.component.css']
})


export class GenerateLinkComponent {
  title = 'URLSwitch';
  newUrl = "";
  process = 0;
  value = "";
  inputUrl = '';
  constructor(

    private httpClient: HttpClient,

  ) { }

  submitUrl(value: string) {
    this.value = value;
    let firebaseComponent = new FirebaseComponent(this.httpClient);
    let inputUrl = value;
    console.log('gen link submit url ', value);
    firebaseComponent.onSubmit(inputUrl);
    //firebaseComponent.getData();
    this.newUrl = "damn boy";
    this.process = 1;
  }
}
