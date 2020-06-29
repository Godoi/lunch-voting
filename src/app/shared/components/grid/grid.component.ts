import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IRestaurant } from '../../models/restaurant.module';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() data: IRestaurant[] = [];
  @Input() users: IUser[] = [];
  @Input() winner:boolean;
  @Output() actionVote = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  vote(restaurants: IRestaurant) {
    this.actionVote.emit(restaurants);
  }
}
