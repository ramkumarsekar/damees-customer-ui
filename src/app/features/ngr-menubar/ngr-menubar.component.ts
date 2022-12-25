import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngr-menubar',
  templateUrl: './ngr-menubar.component.html',
  styleUrls: ['./ngr-menubar.component.scss']
})
export class NgrMenubarComponent implements OnInit {
  @Input() showDialogBox!: boolean;
  @Input() position! : string;
  @Output() closeDialogBox = new EventEmitter();
  private element: any;
  menubar: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if(this.showDialogBox){
      this.menubar[0].open();
      this.open();
    }else{
      this.close();
    }
  }

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.element);

      // close menubar on background click
      this.element.addEventListener('click', (el: any) => {
        if (el.target.className === 'ngr-menubar-body') {
          this.close();
        }
      });
      this.menubar.push(this);
  }

  // open menubar
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('ngr-menubar-open');
  }

  // close menubar
  close(): void {
    this.element.style.display = 'none';
    this.closeDialogBox.emit(false);
    document.body.classList.remove('ngr-menubar-open');
  }

}
