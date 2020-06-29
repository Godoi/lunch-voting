import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { WinnerComponent } from './components/winner/winner.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [HeaderComponent, CountdownComponent, WinnerComponent, ModalComponent],
  imports: [CommonModule, RouterModule, NgbModule, FormsModule, ReactiveFormsModule, CountdownModule],
  exports: [HeaderComponent, CountdownComponent, WinnerComponent,ModalComponent],
  bootstrap: [ModalComponent],
  entryComponents: [ ModalComponent ]
})
export class SharedModule {}