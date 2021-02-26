import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() cambiaColor!: any;
  constructor(private e: ElementRef, private r: Renderer2) { }

  @HostListener('mouseenter')
  entrarMouse(){
    this.r.setStyle(this.cambiaColor, "border", "solid orange 3px");
  }

  @HostListener('mouseleave')
  saleMouse(){
    this.r.setStyle(this.cambiaColor, "border", "solid transparent 0px");

  }
}
