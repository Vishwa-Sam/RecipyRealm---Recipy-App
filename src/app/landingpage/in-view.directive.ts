import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[inView]',
  standalone: true,
})
export class InViewDirective {
  @Output() inView = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.inView.emit(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(this.elementRef.nativeElement);
  }
}
