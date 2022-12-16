import { Component, Input } from '@angular/core';
import {
  FormControl, UntypedFormGroup, Validators,
  UntypedFormControl,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})

export class FirebaseComponent {

  @Input() inputValue: string | undefined;

  favoriteColorControl = new FormControl('');



  favoriteColor = '';

  signupForm: UntypedFormGroup = new UntypedFormGroup(
    {
      link: new UntypedFormControl('', [Validators.required]),
    }

  );

  constructor(

    private httpClient: HttpClient,

  ) { }

  onSubmit(value: string) {
    // console.log('signupForm', this.signupForm.value);

    this.httpClient.post("https://urlshortner-8458d-default-rtdb.firebaseio.com/links.json", JSON.parse('{"key":"' + value + '"}'))
      .subscribe
      ((response) => {
        console.log(response);
        this.signupForm.reset();
      }
      );

    // this.httpClient.get("https://urlshortner-8458d-default-rtdb.firebaseio.com/links.json")
    //   .subscribe((data) => {
    //     console.log(data);
    //     // this.searchData(data)

    //   });


  }

  // searchData(data){
  //   <Item[]> JSON.parse(data);
  // }


}
