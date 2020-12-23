import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { StatusPipe } from './../status.pipe';
import { MaxValueDirective } from './../../max-value.directive';
import { StarComponent } from './../star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [  StarComponent,
    MaxValueDirective,
    StatusPipe,],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports:[StarComponent,
    MaxValueDirective,
    StatusPipe]
})
export class SharedModule { }
