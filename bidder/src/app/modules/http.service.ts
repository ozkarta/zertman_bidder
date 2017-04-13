import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()

export class HttpService{

	constructor(private http: Http){

	}



	public getSlot() : Observable <any>{

		return this.http.get('http://localhost/zertman_bidder/api/get_slot_data.php')
            .map(this.extractData)
            .catch(this.handleError);

	}

	public getLatestBid(slotGUID: string) : Observable <any>{
		return this.http.get('http://localhost/zertman_bidder/api/get_latest_bid.php?slotGUID='+slotGUID)
            .map(this.extractData)
            .catch(this.handleError);
	} 


	private extractData(res: Response){


		let body ;


		try{

			body = res.json();

		}catch(ex){
			console.dir(ex);
		}


		console.dir(body);




		return body;
	}


	private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}