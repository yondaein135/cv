import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('animationFadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class IntroductionComponent implements OnInit {
  greetings = ['Hello!', 'Salut!', '¡Hola!', 'Hallo!', 'Ciao!', 'こんにちは', '안녕하세요!', '你好!', 'Привет!'];
  currentGreeting = '';
  showGreeting = false;

  ngOnInit() {
    let i = 0;
    setInterval(() => {
      this.currentGreeting = this.greetings[i];
      this.showGreeting = true;

      setTimeout(() => this.showGreeting = false, 2500);

      setTimeout(() => {
        i = (i + 1) % this.greetings.length;
      }, 2000);
    }, 4000);
  }
}
