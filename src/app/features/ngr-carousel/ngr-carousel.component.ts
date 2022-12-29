import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { Component, ContentChildren, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgrCarouselItemElementDirective } from './ngr-carousel-item-element.directive';
import { NgrCarouselItemDirective } from './ngr-carousel-item.directive';

@Component({
  selector: 'ngr-carousel',
  exportAs: 'carousel',
  templateUrl: './ngr-carousel.component.html',
  styleUrls: ['./ngr-carousel.component.scss']
})
export class NgrCarouselComponent implements OnInit {

  carouselWrapperStyle : any;

  @ContentChildren(NgrCarouselItemDirective)
  items!: QueryList<NgrCarouselItemDirective>;

  @ViewChildren(NgrCarouselItemElementDirective, { read: ElementRef })
  private itemsElements!: QueryList<ElementRef>;

  @ViewChild('carousel') private carousel!: ElementRef;

  showControls : boolean = true;
  @Input() timing = '500ms ease-in';
  private player!: AnimationPlayer;
  private itemWidth!: number;
  private currentSlide = 0;

  constructor(private builder: AnimationBuilder) {
  }

  ngOnInit(): void {  }

  private buildAnimation(offset : any, time: any) {
    return this.builder.build([
      animate(
        time == null ? this.timing : 0,
        style({ transform: `translateX(-${offset}px)` })
      ),
    ]);
  }

  
  /**
   * Progresses the carousel forward by 1 slide.
   */
  next() {
    if (this.currentSlide + 5 == this.items.length) {
      let arr = this.items.toArray();
      let first : any= arr.shift();
      arr = arr.concat([first]);
      this.items.reset(arr);
      this.currentSlide--;
      this.transitionCarousel(0);
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    this.transitionCarousel(null);
  }

  /**
   * Regresses the carousel backwards by 1 slide.
   */
  prev() {
    // if (this.currentSlide === 0) return;
    if (this.currentSlide == 0) {
      let arr : any = this.items.toArray();
      let last = arr.pop();
      arr = [last].concat(arr);
      this.items.reset(arr);
      this.currentSlide++;
      this.transitionCarousel(0);
    }

    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    this.transitionCarousel(null);
  }
  
  ngAfterViewInit() {
    this.reSizeCarousel();
  }

  /**
   * Listens for changes to the viewport size and triggers a re-sizing of the carousel.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event : any) {
    this.reSizeCarousel();
  }

  /**
   * Re-sizes the carousel container and triggers `this.transitionCarousel()` to reset the childrens' positions.
   *
   * For use on initial load, and when changing viewport size.
   */
  reSizeCarousel(): void {
    // re-size the container
    this.itemWidth = this.itemsElements?.first?.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px * 5`,
    };

    // trigger a fresh transition to the current slide to reset the position of the children
    this.transitionCarousel(null);
  }

  /**
   * Animates the carousel to the currently selected slide.
   *
   * **You must set `this.currentSlide` before calling this method, or it will have no effect.**
   */
  transitionCarousel(time: any) {
    console.log('*', time);
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

}
