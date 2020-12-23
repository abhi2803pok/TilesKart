import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  canActivate():boolean{
    if(localStorage.getItem("user")!=null && localStorage.getItem("user")!=""){
    
      return true;

  }
  else{
    return false;
  }

}
}
