import { Component, OnInit } from '@angular/core';
import { ITile } from '../../interfaces/itile';
import { flatten } from '@angular/compiler';
import { TileService } from '../tile.service';
@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
})
export class TilesComponent implements OnInit {
  filterOptions: Array<string> = ['model', 'price', 'available'];
  selectedFilterOption: string;
  filterText: string = '';
  imagePath: string = '/assets/images/';
  fTiles: Array<ITile>;
  tiles: Array<ITile>;
  errorMessage: string;
  constructor(public tileService: TileService) {}
  ngOnInit(): void {
    var test = '/ass';
    if(localStorage.getItem("user")!=null && localStorage.getItem("user")!=""){
    this.tileService.getTiles().subscribe(
      (tilesdata) => {
        this.tiles = tilesdata;
        this.fTiles = this.tiles;
      },  //kkkkk
      //kk

      (error) => {
        this.errorMessage = error;
      }
    );
  }}
  filter() {
    console.log(this.selectedFilterOption);
    console.log(this.filterText);
    this.fTiles = this.tileService.performFilter(
      this.selectedFilterOption,
      this.filterText,
      this.tiles
    );
    console.log(this.fTiles);
  }
}
