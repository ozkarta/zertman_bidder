import { Component } from '@angular/core';

import {HttpService} from './modules/http.service';
import { BidService } from './modules/bid.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  	slotGUID: string;
	slotName: string;
	slotDescription: string;

	bidderName: string;
	bidAmmount: string;

	newBid: string;
	newBidder: string;


	constructor(private http: HttpService,private bidService: BidService){
		// this.slotName = 'Slot Name_';
		// this.slotDescription = 'Slot Description_';

		this.http.getSlot()
				.subscribe(
					(res) =>{
						//console.dir(res);
						this.slotName = res.slotName;
						this.slotDescription = res.slotDescription;
						this.slotGUID = res.slotGUID;

						if (this.slotGUID){
							this.http.getLatestBid(this.slotGUID)
								.subscribe(
										(result) =>{
											console.dir(result);

											this.bidderName = result.bidder;
											this.bidAmmount = result.bidAmmount;

											this.newBid = this.bidAmmount;
										},
										(error) =>{
											console.dir(error);
										}
									)
						}

					},
					(err) =>{
						console.dir(err);
					}
				)


		this.bidService.ws.subscribe(
						(result)=>{
							

							this.bidderName = result.bidder;
							this.bidAmmount = result.bidAmmount;

							this.newBid = this.bidAmmount;
						}
					)
	}

	bid(){
		console.log('bidding '+ this.newBid +'  by '+this.newBidder);


		this.bidService.bid(this.newBidder,this.newBid,this.slotGUID);

	}



}
