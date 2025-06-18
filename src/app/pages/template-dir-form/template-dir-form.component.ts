import { Component } from '@angular/core';
import { stdInfo } from '../../core/intersepters/std';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-dir-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-dir-form.component.html',
  styleUrl: './template-dir-form.component.css'
})
export class TemplateDirFormComponent {

  strudantObj: stdInfo  ={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode: '',
    isAcceptTerms: false,

  }

  formValue: any;

  onSubmit(){
    this.formValue = this.strudantObj
  }

  onreset(){
    this.strudantObj  ={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode: '',
    isAcceptTerms: false,

  }
  }
}
