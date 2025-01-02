import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimationOptions, LottieComponent, provideLottieOptions} from 'ngx-lottie';
import  {AnimationItem} from 'lottie-web';
import {ButtonDirective, ColComponent, ContainerComponent, ImgDirective, RowComponent} from '@coreui/angular';
import player from 'lottie-web';
import WebApp from '@twa-dev/sdk';
@Component({
  selector: 'app-home',
  imports: [
    ColComponent,
    LottieComponent,
    ContainerComponent,
    ButtonDirective,
    RowComponent,
    ImgDirective
  ],
providers:[   provideLottieOptions({
  player: () => player,
}),],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {


  constructor() {
    this.setupMiningSimulator();
  }

  hashRate = 0;
  baseIncrement = 0.00000001;
  multiplier = 1;
  intervalId: any;
  displayText = '0.00000000 TON';
  options: AnimationOptions = {
    path: '/animation.json',
    loop:true,
    autoplay:true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  ngOnInit() {
    this.startMining();
  }

  ngOnDestroy() {
    this.stopMining();
  }

  setupMiningSimulator() {
    WebApp.MainButton.setText('Boost Mining');
    WebApp.MainButton.show();
    WebApp.MainButton.onClick(() => {
      this.boostMining();
    });
  }

  startMining() {
    this.intervalId = setInterval(() => {
      this.hashRate += this.baseIncrement * this.multiplier;
      this.displayText = `${this.hashRate.toFixed(8)} TON`;
      WebApp.HapticFeedback.impactOccurred('light');
    }, 1000);
  }

  stopMining() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  boostMining() {
    this.multiplier *= 1.5;
    WebApp.HapticFeedback.notificationOccurred('success');
  }
}
