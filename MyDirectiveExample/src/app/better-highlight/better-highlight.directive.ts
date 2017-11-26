import { Directive,
   OnInit,
   Renderer,
   ElementRef,
   HostListener,
   HostBinding,
   Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() highlightedColor: string;

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  constructor(private eleRef: ElementRef, private eleRenderer:  Renderer) { }

  ngOnInit(): void {
    this.defaultColor = 'yellow';
    // this.eleRenderer.setElementStyle(this.eleRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    // this.eleRenderer.setElementStyle(this.eleRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.eleRenderer.setElementStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
  }
}
