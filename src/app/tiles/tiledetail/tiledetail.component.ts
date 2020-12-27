import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TileService } from '../tile.service';
import { ITile } from '../../interfaces/itile';

@Component({
  selector: 'UI-tiledetail',
  templateUrl: './tiledetail.component.html',
  styleUrls: ['./tiledetail.component.css'],
})
export class TiledetailComponent implements OnInit {
  id: number;
  name:number;
  tile: ITile;
  imagePath: string = 'assets/images/';
  constructor(
    private actiavtedRoute: ActivatedRoute,
    private tileService: TileService,
    private router: Router
  ) {
    this.id = +this.actiavtedRoute.snapshot.paramMap.get('Id');
    this.name = +this.actiavtedRoute.snapshot.paramMap.get('Name');
        console.log(this.id);
  }

  ngOnInit(): void {
    this.tileService.getTile(this.id).subscribe((tile) => {
      this.tile = tile;
      console.log(this.tile.name);
    });
  }
  navigateBack(): void {
    this.router.navigate(['/tiles']);
  }
}
