import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



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
export class PostService extends DataService {
  constructor(http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts/',http)
  }
}