import { Component, OnDestroy, OnInit } from '@angular/core';
import { CryptoService } from '../../core/crypto.service';
import { CoinMarketCapResponse } from '../../shared/models/coin-market-cap-response';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit, OnDestroy {

  public coins: CoinMarketCapResponse[];
  public currentCoin: CoinMarketCapResponse;

  private tick: number;
  private timerSubscription: Subscription;

  constructor(private cryptoService: CryptoService) {
  }

  public ngOnInit(): void {
    this.cryptoService.getCoins().subscribe((data) => {
      this.coins = data;
    });

    const timer = TimerObservable.create(1000, 1000);
    this.timerSubscription = timer.subscribe(t => {
      this.tick = t;
      this.changeCoin(this.tick);
    });
  }

  public ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  private changeCoin(i: number): void {
    this.currentCoin = this.coins[i % this.coins.length];
  }

}
