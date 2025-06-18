import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  studantForm : FormGroup = new FormGroup({
    firstName : new FormControl("", [Validators.required,Validators.minLength(4)]),
    lastName : new FormControl(null, [Validators.required]),
    userName : new FormControl(null, [Validators.required]),
    city : new FormControl(),
    state : new FormControl(),
    zipCode : new FormControl(),
    isAcceptTerms : new FormControl(),
  })

  formVal : any;

  onSubmit(){
    this.formVal = this.studantForm.value
  }
}
