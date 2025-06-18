import { Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  onKeyUp(eve: Event){
    // user jo type karega vhi value
    let inputControl = eve.target as HTMLInputElement;
    let val = inputControl.value.replace(/\s+/g, '') as string;
      // console.log(val, val.length)
    // 1 first lenght 16 honi chahiye

    if(val.length > 16){
      val = val.substring(0, 16)
    }
      console.log(val, val.length)
    // 2 only number hone chahiye

    if(/[^\d]/.test(val)){
      inputControl.nextElementSibling?.classList.remove('d-none')
    }else{
      inputControl.nextElementSibling?.classList.add('d-none')

    }
    // this.formatCreditCArdVal(val)
    inputControl.value = this.formatCreditCArdVal(val)
   
  }
    // 3 four four ka chank aana chahiye

    formatCreditCArdVal(data:string): string{
      let chunkArr = []

      for (let i=0; i<data.length;i =i+4){
         chunkArr.push(data.slice(i,i+4))
      }
      console.log(chunkArr)

      return chunkArr.join(' ')
    }
  

}
