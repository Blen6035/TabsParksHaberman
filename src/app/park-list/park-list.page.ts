import { Component, OnInit } from '@angular/core';
import { ParkData } from '.././providers/park-data';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage {
  parks: Array<Park> = []
  searchQuery: string = '';

  constructor(public parkData: ParkData, public router: Router) {
    ParkData.getParks().then(theResult => {
      this.parks = theResult;
    })
   }
   goParkDetails( theParkData ) {
     let url = '/tabs/details/' + theParkData.id
     this.router.navigate([url]);
    }
   }
   getParks(event) {
     this.parkData.getParks().then(theResult => {
       this.parks = theResult;
     })

    let queryString = event.target.value;

    if (queryString != undefined) {
      if (queryString.trim()== ''){
        return;
      }
      this.parkData.getFilteredParks(queryString).then(theResult => {
        this.parks = theResult;
      })
    }
   }

  ngOnInit() {
  }

}
