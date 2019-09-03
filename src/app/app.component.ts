//import { Component } from '@angular/core';

//@Component({
 // selector: 'app-root',
 // templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
//})
//export class AppComponent {
  //title = 'Portfolio';
//}
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;
 constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'ホーム',
            link: './first',
            index: 0
        }, {
            label: '作成した物',
            link: './second',
            index: 1
        }, {
            label: 'その他',
            link: './third',
            index: 2
        }, {
          label: 'ブログ',
          link: './blog',
          index: 3
      },
    ];
}
ngOnInit(): void {
  let options = {
    strings: ["Product ", "Web ", "UX/UI"],
    typeSpeed:200,
    backSpeed:10,
    showCursor: true,
    cursorChar: "",
    loop:true
  }
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
