import { Component } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onSubmit(form: NgForm) {  // ElementRef
    // console.log('submitted');
    console.log(form);
    console.log(form.value.fname);
    console.log(form.value.lname);
    console.log(form.value.address);
  }
}
