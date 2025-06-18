import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-sign-up',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-sign-up.component.html',
  styleUrl: './login-sign-up.component.css'
})
export class LoginSignUpComponent implements OnInit {

  signUpUsers: any[] = []

  showLogin = false;

  constructor(){}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData  != null){
        this.signUpUsers = JSON.parse(localData)
    }
  }

  loginObj: any =
  {
    userName : '',
    password : ''
  }

  signUpObj : any = {
    userName : '',
    email : '',
    SecreteQus : '',
    answer : '',
    contactMode : '',
     password : '',
    isSubcribe : true
  }

  onlogin(){
    const isUserExist = this.signUpUsers.find(m=> m.userName === this.loginObj.userName && m.password === this.loginObj.password);
    if(isUserExist != undefined){
      alert('User Login SuccessFully !!')
    }else{
      alert('wrong Creditials')
    }
  }

  mocArr = [
    {
      contactMode : 'Email' , id : 123
    },
    {
      contactMode : 'Phone' , id : 124
    }
  ]

  onSignUp(){
    this.signUpUsers.push(this.signUpObj)
      localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers))
    this.signUpObj = {
    userName : '',
    email : '',
    SecreteQus : '',
    answer : '',
    contactMode : '',
    password : '',
    isSubcribe : true
  }
  }

  openSignUp(){
    this.showLogin = false;
  }

  openLogin(){
    this.showLogin = true;
  }
}



// export class LoginSignUpComponent implements OnInit {
//   constructor(){}

//   ngOnInit(): void {
//     const localData = localStorage.getItem('signUpUsers');
//     if(localData  != null){
//         this.signUpUsers = JSON.parse(localData)
//     }
//   }

//   @ViewChild('signup') signup !: NgForm

//   signUpUsers: any[] = []

//   loginObj: any =
//   {
//     userName : '',
//     password : ''
//   }

//   signUpObj : any = {
//     userName : '',
//     email : '',
//     SecreteQus : '',
//     answer : '',
//     contactMode : '',
//      password : '',
//     isSubcribe : true
//   }

// // router = inject(Router)
// router = inject(Router)

//   // onlogin(){
//   //   console.log(this.loginObj)
//   //   if(this.loginObj.userName == 'manisha' && this.loginObj.password == '1234'){
//   //     // debugger
//   //     alert('login success')
//   //     this.router.navigateByUrl('credit-card')
//   //   }else{
//   //     alert('not success')
//   //   }
//   // }

//   onlogin(){
//     const isUserExist = this.signUpUsers.find(m=> m.userName === this.loginObj.userName && m.password === this.loginObj.password);
//     if(isUserExist != undefined){
//       alert('User Login SuccessFully !!')
//     }else{
//       alert('wrong Creditials')
//     }
//   }

//   mocArr = [
//     {
//       contactMode : 'Email' , id : 123
//     },
//     {
//       contactMode : 'Phone' , id : 124
//     }
//   ]

//   signUpVal ={
//   "userInfo": { "userName": "manisha", "email": "mp@gmail.com" },
//             "secretQus": "favorateSport", 
//             "answer": "cricket",
//             "isSubcribe": true,
//             "modeOfContact": "Email" 
//           }
  
//   onDataPatch(){
//     this.signup.form.patchValue(this.signUpVal)
//   }

//   onSignin(){
//      if(this.signup.valid){
//        console.log(this.signup)
//       // console.log('SignUp SuccessFully !!!')
//       console.log(this.signup.value)
//      }
//   }

//   onSignUp(){
//     this.signUpUsers.push(this.signUpObj)
//       localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers))
//     this.signUpObj = {
//     userName : '',
//     email : '',
//     SecreteQus : '',
//     answer : '',
//     contactMode : '',
//     password : '',
//     isSubcribe : true
//   }
//   }
// }