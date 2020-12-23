import { Component, OnInit, Input } from '@angular/core';
import { ITile } from 'src/app/interfaces/itile';

@Component({
  selector: '[UI-tile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {
  imagePath: string = '/assets/images/';
  @Input() tile;
  constructor() {}

  ngOnInit(): void {}
  updateRating() {
    this.tile.rating = 3;
  }
  updateRatingValue(newRating){
    console.log('new rating value is ' + newRating);
  }
}

