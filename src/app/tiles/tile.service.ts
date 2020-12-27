import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ITile } from '../interfaces/itile';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TileService {
  tiles: Array<ITile>;
  tilesURL: string = 'http://demo8499217.mockable.io/tiles';

  constructor(private httpClient: HttpClient) {}

  getTiles(): Observable<Array<ITile>> {
    return this.httpClient
      .get<Array<ITile>>(this.tilesURL)
      .pipe(catchError(this.handleError));
  }

  getTile(Id: number): Observable<ITile> {
    return this.httpClient.get<ITile>(this.tilesURL + `/${Id}`);
  }

  handleError(errorResponse: HttpErrorResponse) {
    //if there is error in the back end call I want to show
    if (errorResponse.error instanceof ErrorEvent) {
      console.error(`client side error ${errorResponse.error.message}`);
    } else {
      console.error(`server side error ${errorResponse}`);
    }
    return throwError('Problem in Back End. Will get resumed soon');
  }

  getCuurentLocale() {
    return navigator.language;
  }
  performFilter(filterCriteria, filterText, tilesArray) {
    //from tilesArray get filtered array by applying built in array
    let filterTilesArray = tilesArray.filter((tile) => {
      if (filterCriteria == 'available') {
        return tile.status == filterText;
      } else if (filterCriteria == 'model') {
        return tile.model == filterText;
      } else return false;
    });
    return filterTilesArray;
  }
}
