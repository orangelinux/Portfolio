import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';

import {NgxTypedJsModule} from 'ngx-typed-js';
import {MatToolbarModule,MatIconModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule,MatMenuModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { Componenet4Component } from './componenet4/componenet4.component';

//const appRoutes: Routes = [ // 追加
//  { path: '', component: ChatComponent },
//];

@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    Componenet2Component,
    Componenet3Component,
    Componenet4Component
  ],
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
