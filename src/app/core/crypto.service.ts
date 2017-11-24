import { Inject, Injectable, Optional } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CoinMarketCapResponse } from '../shared/models/coin-market-cap-response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';


@Injectable()
export class CryptoService {

  baseUrl: string;
  coinMarketCapUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
  lastUpdated: Date;
  currentCoinMarketCapResponses: Observable<CoinMarketCapResponse[]>;

  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.baseUrl = `${origin}${this.baseUrl}`;
    this.lastUpdated = new Date();
    this.currentCoinMarketCapResponses = this.getCoinMarketCapData();
  }

  public getCoins(): Observable<CoinMarketCapResponse[]> {
    // If 5 minutes have not passed since last update
    const timeSinceUpdate = Date.now() - this.lastUpdated.getTime();
    // 300000 milliseconds is 5 minutes
    if (timeSinceUpdate > 300000) {
      this.lastUpdated = new Date();
      return this.getCoinMarketCapData();
    }
    return this.currentCoinMarketCapResponses;
  }

  private getCoinMarketCapData(): Observable<CoinMarketCapResponse[]> {
    return this.http.get<CoinMarketCapResponse[]>(this.coinMarketCapUrl)
      .retry(2);
  }


}
