import { Directive, ElementRef, HostListener, inject } from '@angular/core';
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  private el = inject(ElementRef<HTMLElement>);
  @HostListener('mouseenter') enter(){ this.el.nativeElement.style.transform='translateY(-4px)'; this.el.nativeElement.style.borderColor='var(--primary)'; }
  @HostListener('mouseleave') leave(){ this.el.nativeElement.style.transform=''; this.el.nativeElement.style.borderColor='var(--border)'; }
}
