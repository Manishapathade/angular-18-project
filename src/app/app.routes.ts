import { Routes } from '@angular/router';
import { CreditCardComponent } from './pages/credit-card/credit-card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TemplateDirFormComponent } from './pages/template-dir-form/template-dir-form.component';
import { LoginSignUpComponent } from './pages/login-sign-up/login-sign-up.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path : 'login-signUp',
        component : LoginSignUpComponent
    },
    {
        path: 'credit-card',
        component: CreditCardComponent
     },  
     {
        path:'templateDirForm',
        component: TemplateDirFormComponent
     },
     {
        path:'reactiveForm',
        component: ReactiveFormComponent
     },
    {
        path:'login-signUp',
        component:LoginSignUpComponent,
        children: [
           {
           path: 'credit-card',
           component: CreditCardComponent
          },
        ]
    },
    {
        path:'page-not-found',
        component:PageNotFoundComponent
    },
    {
        path:'**',
        redirectTo:'page-not-found'
    }
];







//  signUpVal ={
//   "userInfo": { "userName": "manisha", "email": "mp@gmail.com" },
//             "secretQus": "favorateSport", 
//             "answer": "cricket",
//             "isSubcribe": true,
//             "modeOfContact": "Email" 
//           }
  
//   onDataPatch(){
//     this.signup.form.patchValue(this.signUpVal)
//   }