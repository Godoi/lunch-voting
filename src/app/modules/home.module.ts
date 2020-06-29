import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { GridComponent } from '../shared/components/grid/grid.component';
@NgModule({
  declarations: [HomeComponent,GridComponent],
  imports: [HomeRoutingModule, CommonModule, SharedModule],
})
export class HomeModule {}