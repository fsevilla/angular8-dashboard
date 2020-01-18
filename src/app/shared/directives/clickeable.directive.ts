import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[clickeable]',
})
export class ClickeableDirective implements OnInit {

  @Input() clickeable:boolean;

  constructor(private element:ElementRef) { }

  ngOnInit() {
    if(this.clickeable) {
      this.element.nativeElement.addEventListener('click', () => {
        console.log('Hizo click sobre ', this.element.nativeElement);
      })
    }
  }

}
