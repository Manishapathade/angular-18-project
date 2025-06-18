import { Component } from '@angular/core';
import { CreditCardDirective } from '../../shared/directives/credit-card.directive';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-card',
  imports: [CreditCardDirective,FormsModule,CommonModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {

  stdObj : any = {
     firstName:''
  }
}
