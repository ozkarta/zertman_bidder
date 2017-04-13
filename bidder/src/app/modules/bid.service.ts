import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

import { WebSocketService } from './web-socket.service';


@Injectable()
export class BidService{

	public ws: Subject<any>;


	constructor(wsService: WebSocketService){

		console.log('WebSocket created....');


		this.ws = <Subject<any>>wsService.connect('ws://localhost:8080')
			.map((response: MessageEvent): any => {

				console.dir(response.data);

				console.log('connection established');


				let serverResponseJSON = JSON.parse(response.data);


				return serverResponseJSON;

			});



	}

	public bid(bidder:string, bidAmmount: string,slot: string){


		this.ws.next({bidder:bidder,bidAmmount:bidAmmount,slotGUID:slot});

	}


}