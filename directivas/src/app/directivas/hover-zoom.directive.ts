import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverZoom]',
  standalone: true,
    host: {
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HoverZoomDirective {

  @Input() appHoverZoom: number = 1.5;

private el = inject(ElementRef);
private render = inject(Renderer2);

  constructor() { }

   @HostListener('mouseenter') onMouseEnter() {
  //  this.el.nativeElement.style.transform = `scale(${this.appHoverZoom})`;
    this.render.setStyle(this.el.nativeElement, 'transform', `scale(${this.appHoverZoom})`);
  }

  @HostListener('mouseleave') onMouseLeave() {
   // this.el.nativeElement.style.transform = 'scale(1)';
    this.render.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }

}