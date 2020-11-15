import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @Input() backgroundColor: string; 
  constructor() { 
      console.log('Class Directive Used');
  }

}
