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
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
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
  this.myStyle = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
};

this.myParams = {
    particles: {
        number: {
            value: 80,
            "density":{
              "enable":true, //シェイプの密集度を変更するか否か
              "value_area":200 //シェイプの密集度
            }
        },
        stroke: {
            color: '#000000'
        },
        color: {
          color: '#000000'
      },
        shape: {
            type: 'triangle',
        },
}
};

  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}