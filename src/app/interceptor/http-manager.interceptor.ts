import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {AuthService} from "../service/auth/auth.service";


@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('inter')

    if(this.authService.checkCookie('myToken')){
      request=request.clone({
        setHeaders:{Authorization:this.authService.getCookie("myToken")}
      });
    }
    return next.handle(request).pipe(catchError(err=>{
        console.log(err)

        if(err.status===401 || err.status==403){
          alert("Unauthorized")
        }
        let error=err.message || err.statusText
        return throwError(error)
      }),finalize(()=>{
       // this.loadingService.loadingState.next(false);
      })
    );
  }
}
