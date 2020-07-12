import { InvalidInput } from './../commen/invalid-input';
import { NotFoundError } from './../commen/not-found-error';
import { AppError } from './../commen/app-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


/**
 * 5as nzido service f l module li 5damin fih
 * f notre exemple l module hwa app.module.ts
 * f had fichier kanzido smia d service f tableau providers[...]
 * o knimportiw chemain dyalo
 * n9ado n5dmo extention autoimport f VS code li ktimporti dakchi automatiquement
 */

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private path:string, private http: HttpClient) { }

  getFnc() {
    return this.http.get(this.path).pipe(
      // eg. "map" without a dot before
      retry(1),
      // "catchError" instead "catch"
      catchError(this.handelErrors)
    );
  }

  postFnc(p) {
    return this.http.post(this.path, p).pipe(
      // eg. "map" without a dot before
      retry(1),
      // "catchError" instead "catch"
      catchError(this.handelErrors)
    );
  }

  putFnc(post) {
    return this.http.put(this.path + post.id, post).pipe(
      // eg. "map" without a dot before
      retry(1),
      // "catchError" instead "catch"
      catchError(this.handelErrors)
    );
  }

  deleteFnc(v: number) {
    return this.http.delete(this.path + v).pipe(
      // eg. "map" without a dot before
      retry(1),
      // "catchError" instead "catch"
      catchError(this.handelErrors)
    );
  }

  handelErrors(error:Response){
    if (error.status === 404) {
      console.log("1)" + error.statusText)
      return throwError(new NotFoundError);
    }
    else if(error.status === 400){
      console.log("2)" + error.statusText)
      return throwError(new InvalidInput);
    }
    console.log("3)" + error.statusText)
    return throwError(new AppError);
  }
}


