import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPropreDirective]'
})

/**
 * drna smia d directive f7al input bach ndiro prority binding direct b nafs slia
 * bnfs smya n3to l directive o nsifto l input l variable
 */

export class PropreDirectiveDirective {
@Input('appPropreDirective') case;
  constructor(private el:ElementRef) { }
  @HostListener('blur')onBlur(){
    if(this.case=="lower"){
      this.el.nativeElement.value=this.el.nativeElement.value.toLowerCase();
    }
    else{
    this.el.nativeElement.value=this.el.nativeElement.value.toUpperCase();
    }
}
}
