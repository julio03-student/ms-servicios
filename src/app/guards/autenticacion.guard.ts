import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/share/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(private localStorageService:LocalStorageService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = this.localStorageService.GetTokenFromLS();
    if(token != ""){
      return true;
      console.log("No se ha autenticado aun");
      
    }
    this.router.navigate(["/security/login"]);
    return false;
    console.log("Autenticacion en progreso");
    
    
  }
  
}
