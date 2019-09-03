//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';



//@NgModule({
 // declarations: [],
//  imports: [
 //   CommonModule
//  ]
//})
//export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { Componenet4Component } from './componenet4/componenet4.component';
const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component:  Componenet1Component},
  { path: 'second', component:  Componenet2Component},
  { path: 'third', component: Componenet3Component},
  { path: 'blog', component: Componenet4Component},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }