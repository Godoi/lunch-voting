import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CountdownEvent } from 'ngx-countdown';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements OnInit {
  @Input() stopHours: number;
  @Output() actionWinner = new EventEmitter();

  public config: any;
  public week: string;

  constructor() { }

  ngOnInit() {
    this.start();
    this.week = this.getWeek();
  }
  start(){
    let today = moment();
    let stopDay = moment();
    stopDay.hour(this.stopHours).minute(0).second(0);
    if(today.isAfter(stopDay)){
        stopDay.add(1, 'day');
    }
    let diff = today.diff(stopDay, 'seconds');
    this.config = {leftTime: diff < 0 ? diff * (-1) : diff};
  }
  getWeek(){
    const weekDay = moment().hours() < this.stopHours ? moment().weekday() : moment().weekday() + 1;
    let week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];  
    return week[weekDay];
  }
  handleEvent(e: CountdownEvent) {
    if(e.status === 3){
      this.winner();
    }
  }
  winner() {
    this.actionWinner.emit();
  }
}
