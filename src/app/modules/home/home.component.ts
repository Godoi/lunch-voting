import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

import { IRestaurant } from './../../shared/models/restaurant.module';
import { IUser } from './../../shared/models/user.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  public restaurant: IRestaurant;
  public resultWinner: IRestaurant;
  public users: IUser;
  public loading: boolean;
  public statusWinner: boolean = false;
  public errorWinner: boolean = false;
  public stopHours: number = 12;
  private modalRef;
  constructor(protected service: RestaurantService, protected userService: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getRestaurants();
    this.getUsers();
  }

  getRestaurants() {
    let week = this.getWeek();
    this.loading = true;
    this.subscriptions.add(
      this.service
      .getAllRestaurants(week)
      .pipe(
        take(1),
        finalize(() => (this.loading = false)),
      )
      .subscribe(result => {
        this.restaurant = result.restaurants;
        return true;
      }),
    );
  }

  getUsers() {
    this.subscriptions.add(
      this.userService.getAllUsers().pipe(
        take(1)
      )
      .subscribe(result => {
        this.users = result.users;
        return true;
      }),
    );
  }

  getWeek(){
    const weekDay = moment().hours() < this.stopHours ? moment().weekday() : moment().weekday() + 1;
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];  
    return week[weekDay];
  }

  openModal(restaurant: IRestaurant, msgError: string) {
    this.modalRef = this.modalService.open(ModalComponent, { centered: true });  
      if(msgError){
        this.modalRef.componentInstance.error = true;
        this.modalRef.componentInstance.msgError = msgError;
      }else{
        this.modalRef.componentInstance.error = false;
        this.modalRef.componentInstance.msgError = '';
      }
      
    this.modalRef.result.then((result) => {
      this.saveVote(result,restaurant);
    }).catch(error => error);
  }

  saveVote(user:IUser, restaurant: IRestaurant){    
    let payload = {
      email: user.email,
      restaurant_id: restaurant.id
    }; 
    this.subscriptions.add(
      this.service.saveVote(payload).subscribe({
        next: res => {
          if(res){
            this.getRestaurants();
          }        
        },
        error: err => {
          this.openModal(restaurant, err.error.message);
        },
      })
    );
  }

  vote(restaurant: IRestaurant){
    this.openModal(restaurant, '');
  }

  winner(){
    let week = this.getWeek();
    this.subscriptions.add(
      this.service
      .getWinningRestaurants(week)
      .pipe(
        take(1),
      )
      .subscribe(
        result => {
          this.statusWinner = true;
          this.resultWinner = result.restaurant;
        },
        err => {
          this.statusWinner = true;
          this.errorWinner = true;
        },
        () => console.log('onCompleted ')),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
