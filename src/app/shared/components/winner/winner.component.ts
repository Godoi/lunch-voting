import { Component, OnInit, Input } from '@angular/core';
import { IRestaurant } from '../../models/restaurant.module';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {
  @Input() data: IRestaurant;
  @Input() notWinner: boolean;

  constructor() { }

  ngOnInit() {}

}
