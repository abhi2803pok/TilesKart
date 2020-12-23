import { Component, Input, OnInit,EventEmitter,Output, OnChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'UI-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating;
  faStar = faStar;
  @Output() ratingUpdated:EventEmitter<string> = new EventEmitter();
  ratings: Array<number> = [];
  constructor() {
    console.log('inside constructor');
  }

  newRating:string;
  updateRating(){
     console.log(`new rating value  is ${this.newRating}`);
     this.ratingUpdated.emit(this.newRating);
   }

  ngOnChanges(): void {
    console.log('inside ng on change');
    this.ratings = [];
    for (let index = 0; index < this.rating; index++) {
      this.ratings.push(index);
    }
  }

  ngOnInit(): void {
    console.log('inside ngoninit');
  }
}
