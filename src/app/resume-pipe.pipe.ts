import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumePipe'
})
export class ResumePipePipe implements PipeTransform {
  maLimit:number;
  maStart:number;
  transform(value: any, limit?:number,start?:number): any {
    
    if(!value)return null;
    this.maLimit=(limit)?limit:20;
    this.maStart=(start)?start:0;

    return value.substr(this.maStart,this.maLimit)+'...';
  }

}
