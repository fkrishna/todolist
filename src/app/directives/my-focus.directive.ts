import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myFocus]'
})
export class MyFocusDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.focus();
  }

}
