import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {}

@Component({
  selector: 'slides-example',
  template: `
    <ion-slides pager="true" [options]="slideOpts">
      <ion-slide>
        <ion-img src="/assets/arches-national-park-dark-dusk-33688.jpg"></ion-img>
      </ion-slide>
      <ion-slide>
        <ion-img src="/assets/4k-wallpaper-conifers-desktop-wallpaper-1367192.jpg"></ion-img>
      </ion-slide>
      <ion-slide>
        <ion-img src="/assets/arches-national-park-arizona-canyon-1672813.jpg"></ion-img>
      </ion-slide>
    </ion-slides>
  `
})
export class SlideExample {
  slideOpts = {
    effect: 'flip'
  };
  constructor() {}
}
