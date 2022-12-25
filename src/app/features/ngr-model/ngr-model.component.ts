import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { debug } from 'console';

@Component({
  selector: 'ngr-model',
  templateUrl: './ngr-model.component.html',
  styleUrls: ['./ngr-model.component.scss']
})
export class NgrModelComponent implements OnInit {
  @Input() showDialogBox!: boolean;
  @Input() closeButton!: boolean;
  @Input() position! : string;
  @Input() accept! : string;
  @Input() deny! : string;
  @Output() closeDialogBox = new EventEmitter();
  private element: any;
  modal: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if(this.showDialogBox){
      this.modal[0].open();
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

      // close modal on background click
      this.element.addEventListener('click', (el: any) => {
        if (el.target.className === 'ngr-modal-body') {
          this.close();
        }
      });
      this.modal.push(this);
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('ngr-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    this.closeDialogBox.emit(false);
    document.body.classList.remove('ngr-modal-open');
  }

}
