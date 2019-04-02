import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ParkData {
    data: any = null;

    constructor(public http: Http) {

    }

    load() {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('assets/data/data.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
    }
    getParks(){
        return this.load().then( data => {
            return data;
        });
    }

    getPark ( id ){
        let park = "NOT FOUND";
        for( let i = 0; i < this.data.length; i++){
            if( this.data[i].id == id){
                park = this.data[i];
            }
        }
        return park;
    }
    getFilteredParks( queryString ){
        return this.load().then( theParks => {
            let filteredParks: any = [];

            for (let thePark of theParks){
                if (thePark.name.toLowerCase().indexOf(queryString.toLowerCase())
                > -1) { filteredParks.push(thePark);
                }
            }
            return filteredParks;
        })

    }

    /*resetList(event) {
        this.parkData.getParks().then(theResult => {
            this.parks = theResult;
        })
    }*/
    
}