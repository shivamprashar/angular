import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable( { providedIn: 'root'} )
export class SumService {

 sum(n1:number , n2 : number): number
 {
   return  n1+n2;
 }  
}
